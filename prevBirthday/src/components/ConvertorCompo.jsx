import React from 'react'

function Convertor({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisabled = false,
  currencyDisabled = false,
  className = ""}) {
  return (
    <div className={` bg-red-500 p-3 rounded-lg text-sm flex max-w-[95%] mx-auto ${className}`}>
      <div className='w-1/2 pb-3'>
         <label className="text-black mb-2 inline-block pt-0" htmlFor='amountInputId'>
                     {label} 
                </label>
        <input id='amountInputId' type="number" placeholder='Amount' className='outline-none w-full bg-black/40 py-1.5'
        value={amount}
        onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
        disabled={amountDisabled}
        />
      </div>

      <div className="flex flex-wrap justify-end text-right w-1/2">
                <p className="text-black mb-2 w-full">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-black/40 cursor-pointer outline-none w-16"
                value={selectCurrency}
                disabled={currencyDisabled}
                onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                
                {currencyOptions.map((currency)=>(
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}


                </select>
            </div>
    </div>
  )
}

export default Convertor
