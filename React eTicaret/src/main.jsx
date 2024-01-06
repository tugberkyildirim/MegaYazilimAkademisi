import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import App from './App.jsx'
import { BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
