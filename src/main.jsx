import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/sass/styles.scss'
import * as serviceWorker from './service_worker.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

serviceWorker.register()