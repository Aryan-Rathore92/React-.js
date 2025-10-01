import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

 let [counter, setcounter] = useState(15)  // { Hook --- 01 }

  // let counter = 15

  const addValue = () => {
       console.log("value added", counter);
      //  counter = counter + 1
       setcounter(counter + 1)
  }


  
  return (
    <>
    <h1>Chai aur code</h1>
    <h2>Counter value: {counter}</h2>
    <button
     onClick={addValue}
     >Add Value {counter}</button>
    <br></br>
    <button>Remove Value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
