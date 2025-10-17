import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8); // useState Hook
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

 // useRef Hook
  const passwordRef = useRef(null)

  // useCallback Hook

  const passwordGenerator = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(numberAllowed) str+= "0123456789"
      if(charAllowed) str+= "!@#$%^&*-_+=[]{}~`"

      for (let i = 0; i <= length; i++) {
        
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char);
      }

      setPassword(pass)
  },[length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
       passwordRef.current?.select() // Use for select 
       password.current?.setSelectionRange(0, 999)    // Give for select range
        window.navigator.clipboard.writeText(password)
  }, [password])


  // useEffect Hook
  useEffect(() => {
       passwordGenerator()
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3
      my-8 text-orange-500 bg-gray-700">
       <h1 className='text-white text-center my-3'>Password generator</h1>

          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input
             type="text"
             value={password}
             className='outline-none w-full py-1 px-3'
             placeholder='Password'
             readOnly
             ref={passwordRef}
             />

            <button
            
            onClick={copyPasswordToClipboard}
            class="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-600"
             className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '>
            copy</button>
          </div>

          <div className='flex text-sm gap-x-2'></div>

          <div className='flex items-center gap-x-1 '>
            <style>

            </style>
            <input
            className="accent-blue-700"
            color='blue'
            type="range" 
            min={6}
            max={100}
            value={length}
            //  className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            
            <label> Length : {length}</label>
          </div> 

          <div className='flex items-center gap-x-1'>
            <input 
            className="accent-blue-700"
            type="checkbox" 
            defaultChecked = {numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
         

          <div className='flex items-center gap-x-1'>
            <input 
            className="accent-blue-700"
            type="checkbox" 
            defaultChecked = {charAllowed}
            id='characterInput'
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="characterInput">Charecters</label>
          </div>

      </div>
    </>
  )
}

export default App
