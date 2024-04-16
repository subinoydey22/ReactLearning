import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyinfo'
import { InputBox } from './components/index.js'

function App() {
  const[amount, setAmount] = useState(0)
  const[from,setfrom] = useState('usd')
  const[to,setto] = useState('inr');
  const[convertedAmount,setConvertedAmount] = useState(0);

  const currecyInfo = useCurrencyInfo(from)
  //console.log(currecyInfo);
  const options = Object.keys(currecyInfo)
  const swap = () => {
    setfrom(to),
    setto(from),
    setConvertedAmount(amount),
    setAmount(convertedAmount)
  }
  const convert = () =>
  {
    setConvertedAmount(amount*currecyInfo[to])
  }
  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage:`url(https://tse1.mm.bing.net/th/id/OIP.weGXZdv5f1yNipEP8kavPAHaEX?rs=1&pid=ImgDetMain)`}}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            <form onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}>
                 <div className='w-full mb-1'>
                   <InputBox label="from" amount={amount} currencyOptions={options}
                   onCurrencyChange={(currency)=> setfrom(currency)}
                   onAmountChange={(amount)=>setAmount(amount)} selectedCurrency={from}/>
                   
                 </div>
                 <div className='relative-w-full h-0.5'>
                  <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600
                  text-white px-2 py-0.5' onClick={swap}>Swap</button>
                 </div>
                 <div className='w-full mb-1'>
                   <InputBox label="to" amount={convertedAmount} amountDisabled currencyOptions={options}
                   onCurrencyChange={(currency)=> setto(currency)}
                   onAmountChange={(amount)=>setAmount(amount)} selectedCurrency={to}/>
                   
                 </div>
                 <button
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
               </form>
        </div>
      </div>
    </div>
  )
}


export default App
