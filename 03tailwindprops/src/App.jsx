import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: "Aryan Rathore",
    age: 17.5
  }

  let newArr = [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      
      
      <Card  username = "chai aur code" someObj = {myObj} someArr = {newArr} btnText = "visit me"/>
      { <Card  username = "Aryan" viewPro = "send image" btnText= "click me" /> }
    </>
  )
}

export default App
