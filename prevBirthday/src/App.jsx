import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Colorchanger from './components/Colorchanger'
import Convertor from './components/ConvertorCompo'
import ConvertorUI from './components/ConvertorUI'
import Header from './components/RouterCompos/Header'

function App() {

   
  return (
    <>
    <Header/>

    </>
  )
}

export default App





/*
*********
COUNTER ::
*********


const [counter, setCounter] = useState(1)

  const addValue = () => {
    if (counter < 10) {
      setCounter(prevCounter => prevCounter + 1)
    }
  }
  const removeValue = () => {
    if(counter>0){

      setCounter(prevCounter => prevCounter - 1)
    }
  }


 <header>
        <h1>Create a Counter appliction </h1>
      </header>
      <h2>Count : {counter}</h2>

      <button className='bg-green-700 px-3 py-1 rounded-lg shrink-0'
        onClick={addValue}>Add</button>
      <br />
      <br />
      <button className='bg-pink-600 px-3 py-1 rounded-lg shrink-0'
        onClick={removeValue}>Remove</button>



*/


//************ */
// ChangeColor :: in changeColor component 
//************ */

