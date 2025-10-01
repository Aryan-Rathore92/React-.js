
 import React from "react";
 import ReactDOM from 'react-dom/client'

//  import { jsx as _jsx } from "react/jsx-runtime"; // {we can use this method but is not good}
 import App from './App.jsx'

 function MyApp() {  // Method--01
      return(
       <div>
          <h1>
            Custom App !
          </h1>
       </div>
      )
 }

//  const ReactElement = {  // Method--02
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = ( // Method--03
  <a href="https://google.com" target="_blank">Visit Google</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement( // Method--04 (This method create by react js )
  'a',
  {href: "https://google.com", target: "_blank"},
  'Click me to visit google',
  anotherUser
  
)


ReactDOM.createRoot(document.getElementById('root')).render(
   
    // <App/>
    //  < MyApp/>  
    //  MyApp()  // we can use this method because { MyApp } is a function
    //  ReactElement
     reactElement
  );
