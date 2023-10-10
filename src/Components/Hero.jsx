import React, { useContext } from 'react'
import { Send } from './Send'
import { Button } from '@material-tailwind/react'
import { TransactionContext } from '../Context/TransactionContext'

export const Hero = () => {

    const { connectWallet } = useContext(TransactionContext)
        
    return (
        <div className='min-h-screen w-full md:w-[80%] py-[40pt] md:py-0 flex flex-col md:flex-row justify-around items-center hero-section shadow-xl rounded-lg backdrop-blur-sm bg-[#44c5dc0f]'>
            <div className='h-full w-full md:w-1/2 flex flex-col justify-center items-start px-[20pt] md:px-[30pt] space-y-7 leading-loose'>
                <h2 className='font-bold text-5xl md:text-8xl w-full text-slate-900'>
                    Send Ethers Securely
                </h2>
                <p className='text-slate-700'>
                    Ready to send Ethereum-based tokens to any wallet and keep a close eye on your transactions? 
                    RediPay makes it easy to securely send Ethers while providing real-time transaction tracking. 
                    Whether you're making these transactions on testnet or mainnet, we've got you covered.
                </p>
                <Button onClick={connectWallet} variant="gradient" size="md" className='bg-slate-800 text-slate-100 font-semibold rounded-xl py-2 px-3 hover:bg-slate-700 transition-all hover:text-slate-50 hover:shadow-lg'>
                    Connect Wallet
                </Button>
            </div>
            <div className='h-full w-full md:w-1/2 flex flex-col justify-center items-center px-[20pt] md:px-[30pt] py-[100pt] space-y-7'>
                <Send />
            </div>
        </div>
    )
}
