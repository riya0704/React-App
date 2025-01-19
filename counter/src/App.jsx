import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [counter,setCounter] = useState(5)
   const addValue = () => {
     if (counter <20) {
      setCounter(counter+1);
      // if(counter > 20){
      //   prompt("You have reached the maximum value");
      // }
     }
   }
   const removeValue = () => {
    if(counter > 0 ){
      setCounter(counter - 1);
    }
   }
  return (
    <>
      <h2>Counter Program</h2>
      <h3>Counter Value : {counter}</h3>
      <button
      onClick={addValue}
      >Add Value </button><br/><br/>
      <button 
      onClick={removeValue}
      >Remove Value </button>
    </>
  )
}

export default App
