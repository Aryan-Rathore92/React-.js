import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'


function App() {


  return (
    <UserContextProvider>
      <h1>React with chai and learning important</h1>
    </UserContextProvider>
  )
}

export default App
