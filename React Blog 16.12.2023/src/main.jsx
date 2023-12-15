import React from 'react'
import ReactDOM from 'react-dom/client'
import MenuArea from './components/menu.jsx'
import ENIAC from './components/Eniac.jsx'
import App from './App.jsx'
import './js/jquery.js'
import './js/popper.min.js'
import './js/bootstrap.bundle.min.js'
import './js/bootstrap.js'
import './js/bootstrap.min.js'
import './css/bootstrap.css'
import './css/bootstrap.min.css'
import './css/style.css'

ReactDOM.createRoot(document.getElementById('menuarea')).render(
  <React.StrictMode>
    <MenuArea/>
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
