import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  /* function changeColor(color)
  {
setColor(color)
  } */
  //const [count, setCount] = useState(0)
const [color,setColor] = useState('olive')
  return (
    <div className='w-full h-screen duration=200 ' style={{backgroundColor:color}}>
<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
  <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
<button style={{backgroundColor:'Red'}} onClick={()=> setColor('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>Red</button>
<button style={{backgroundColor:'green'}} onClick={()=> setColor('green')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>Green</button>
<button style={{backgroundColor:'blue'}} onClick={()=> setColor('blue')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>Blue</button>
<button style={{backgroundColor:'violet'}} onClick={()=> setColor('violet')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>Violet</button>
<button style={{backgroundColor:'pink'}} onClick={()=> setColor('pink')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>Pink</button>
  </div>
</div>
    </div>
  )
}

export default App
