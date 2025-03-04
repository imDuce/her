import React, { useState } from 'react'
import Convertor from './ConvertorCompo'
import useCurrInfo from '../hooks/useCurrInfo'

function ConvertorUI() {

  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [to, setTo] = useState('inr')
  const [from, setFrom] = useState('usd')

  const val = useCurrInfo(from);
  const option = Object.keys(val);

  const swapFn= ()=>{
    setAmount(convertedAmount);
    setConvertedAmount(amount);
    setTo(from);
    setFrom(to);
  }
  const convert= ()=>{
    setConvertedAmount(amount*val[to])
  }


    return (
        <div className='bg-black p-72 w-full h-screen flex justify-center items-center'>

            <div className='w-full'>
                <div className='bg-white/30 p-3 rounded-lg border border-yellow-400 mx-auto backdrop-blur-lg max-w-[80%]'>
                    <Convertor label={'From'} 
                    amount={amount}
                    onAmountChange={(e)=>setAmount(e)}
                    onCurrencyChange={(e)=>setFrom(e)}
                    currencyOptions={option}
                    selectCurrency={from}
                    amountDisabled={false}
                    currencyDisabled={false}
                    />
                    <div className='relative h-1.5 w-full'>
                        <button className='rounded-lg bg-blue-700 w-[70px]  border border-white 
                        absolute -translate-x-1/2 -translate-y-1/2 px-2 py-0.5'
                        onClick={swapFn}

                        >SWAP</button>
                    </div>
                    <Convertor label={'To'}
                    amount={convertedAmount}
                    // onAmountChange={(e)=>setAmount(e)}
                    onCurrencyChange={(e)=>setFrom(e)}
                    currencyOptions={option}
                    selectCurrency={to}
                    amountDisabled='true'
                    currencyDisabled={false}
                    />
                    <button className='bg-blue-700 w-full border border-white rounded-md p-2 mt-3'
                    onClick={convert}
                    >CONVERT</button>
                </div>
            </div>
        </div>
    )
}

export default ConvertorUI
