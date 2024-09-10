import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HttpContextProvider } from './Context/HttpContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
<HttpContextProvider>
    <App />
    </HttpContextProvider>  
)
