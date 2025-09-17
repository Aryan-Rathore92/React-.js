import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp() {
     return(
      <div>
        <h1>
          Custom react !
        </h1>
      </div>
     )
}

ReactDOM.createRoot(document.getElementById('root')).render(
 
    < MyApp/>  
  );
