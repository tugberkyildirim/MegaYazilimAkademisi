import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Form from './Form.jsx'
import './css/style.css'
import './css/bootstrap.css'
import './css/bootstrap.min.css'
import './js/bootstrap.js'
import './js/bootstrap.min.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Form/>
  </React.StrictMode>,
)
