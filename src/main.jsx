import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import { AppProvider } from './context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <AppProvider> */}
        <App id="app" />
      {/* </AppProvider> */}
    </React.StrictMode>,
  </BrowserRouter>
)