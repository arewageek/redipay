'use client'
import React, { useEffect, useState } from "react";
// import { Web3 } from 'web3'

// import 

export const TransactionContext = React.createContext();

const {ethereum} = window
// const provider = new Web3.providers.HttpProvider(ethereum)
// const web3 = new Web3(provider)

// const getProvider = () => {
//     const provider = new ethers.providers.Web3Provider(ethereum)
//     const signer = provider.getSigner()
//     const transactionContract = new ethers.Contract(contractAddress, ABI, signer)

//     console.log({
//         state: 'works'
//     })
// }

export const TransactionProvider = ({ children }) => {

    const [connectedAccount, setConnectedAccount] = useState('')
    const [walletConnectionError, setWalletConnectionError] = useState('')
    const [trxHash, setTrxHash] = useState('')
    const [trxError, setTrxError] = useState('')
    const [formData, setFormData] = useState({ receiver: '', amount: '' })

    const handleInputChange = (e, name) => {
        // console.log(e, name)
        setFormData((prevState) => ({...prevState, [name]: e}))
    }

    const CheckIfWalletIsConnected = async () => {
        try{
            if (!ethereum) alert("Please Download Metamask to use this dApp")
            else{
                const accounts = await ethereum.request({
                    method: 'eth_accounts'
                })

                if(accounts.length){
                    setConnectedAccount(accounts[0])
                }
            }
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        CheckIfWalletIsConnected()
    }, [])

    const connectWallet = async () => {
        try{
            if(!ethereum) alert("Please Download Metamask to use this dApp");
            else{
                const accounts = await ethereum.request({
                    method: 'eth_requestAccounts'
                })

                setConnectedAccount(accounts[0])
                console.log(accounts)
            }
        }
        catch(e){
            console.log(e)
            alert(e.message)
        }
    }

    const sendEthers = async () => {
        try{

            let hash, error = ''
            
            if(!ethereum) alert("Please Download Metamask to use this dApp")
            else{
                console.log(formData)

                // const web3 = new Web3()

                // getProvider()
                // console.log() 
                // return

                const amountInWei = formData.amount * (10 ** 18)
                const amountInHex = `0x${amountInWei.toString(16)}`

                console.log({amountInWei, amountInHex})

                try {
                    const res = await ethereum.request({
                    method: 'eth_sendTransaction',
                    params: [
                        {
                        from: connectedAccount,
                        to: formData.receiver,
                        value: amountInHex,
                        },
                    ],
                    });
            
                    console.log({ hash: res });
                    hash = res;
                } catch (e) {
                    console.log({ error: e.message });
                    alert(e.message);
                    error = e.message;
                }
            
                return { hash, error };
            }
        }
        catch(e){
            console.log(e)
            alert(e.message)
        }
    }

    return (
        <TransactionContext.Provider value={{
            connectWallet,
            connectedAccount,
            formData, setFormData, handleInputChange,
            sendEthers,
            trxHash
        }}>
            {children}
        </TransactionContext.Provider>
    );
};

// export const useTransactionContext = () => useContext(TransactionContext)