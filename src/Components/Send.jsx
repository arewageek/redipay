import { useState, useContext, useEffect } from 'react'
import { Button } from '@material-tailwind/react';

import { FormInput } from './FormInput';
import { TransactionContext } from '../Context/TransactionContext';

export const Send = () => {

    const { 
        connectWallet, 
        sendEthers,
        connectedAccount,
        formData,
        setFormData,
        handleInputChange
    } = useContext(TransactionContext)

    const [hash, setHash] = useState('')

    const sendTransaction = async (e) => {
        e.preventDefault()
        const { receiver, amount } = formData

        if(!receiver || !amount) return;
        
        const response = await sendEthers()

        console.log(response)

        if(response.error){
            alert(response.error)
            console.log(response.error, 'error prones')
        }

        else if(response.hash){
            setHash(response.hash)
            console.log(response.hash, 'Clownsss')
        }
        else{
            setHash('')
        }
    }

    // useEffect(() => {
    //     ..
    // }, [])

    return (
        <div className='bg-[#1E293B] text-slate-100 h-full w-full rounded-3xl p-5 flex items-center flex-col'>
            <div className='w-full h-auto text-sm italic md:font-semibold px-[10pt] md:px-[20pt] py-[5pt]'>
                { 
                    connectedAccount ? `Connected Wallet: ${connectedAccount.slice(0,5)}...${connectedAccount.slice(-5)}` : "No Account Linked"
                }
            </div>

            {
                hash ? (
                    <div className='w-full h-auto text-sm italic font-bold px-[10pt] md:px-[20pt] py-[20pt]'>
                        Transaction is being processed:{' '} 
                        <a 
                            href={`https://sepolia.etherscan.io/tx/${hash}`} 
                            className='text-slate-400 italic font-semibold hover:text-slate-300 underline decoration-dotted transition-all'
                            rel="no-referral" target='_blank'
                        >
                            {hash.slice(0,10)} ... {hash.slice(-8)}
                        </a> 
                        <div className='text-[7pt] text-slate-300'>
                            (Click on link to track transaction data)
                        </div>
                    </div>
                ) : null
            }

            <div className='h-full w-full px-[10pt] md:px-[20pt] py-[5pt]'>
                <form className='h-full w-full'>
                    <div className='flex flex-col justify-center items-center h-auto'>
                        <FormInput onchange={handleInputChange} name="receiver" type="text" placeholder="0x4553.....2332" label="Receiver Wallet" />
                    </div>

                    <div className='flex flex-col justify-center items-center h-auto'>
                        <FormInput onchange={handleInputChange} name="amount" type="number" placeholder="200 ETH" label="Amount" />
                    </div>

                    <div className='bg-slate-500 h-[.8px] w-full my-4' />

                    <Button 
                        type='submit'
                        onClick={connectedAccount ? sendTransaction : connectWallet}
                        className='w-full bg-slate-600 hover:bg-slate-700 text-slate-50 py-2 rounded-2xl font-semibold shadow-md my-3'>
                        {connectedAccount ? "Send" : "Connect Wallet"}
                    </Button>
                </form>
            </div>
        </div>
    )
}