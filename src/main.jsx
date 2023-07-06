import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router, } from 'react-router-dom'
// redux
import { Provider } from 'react-redux'
import store from './store/store'
// style
import 'bootstrap/dist/css/bootstrap.min.css';
//  Redux 
import './index.scss'

// axios
import axios from 'axios'
// toast

import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify'

axios.defaults.baseURL="https://nt-devconnector.onrender.com/api"
axios.defaults.headers.common["Content-Type"] = "application/json"
let token = localStorage.getItem("token")
if(token) axios.defaults.headers.common["x-auth-token"] = `${token}`  



ReactDOM.createRoot(document.getElementById('root')).render(

  <Router>
    <Provider store={store} >
      <App />
      <ToastContainer theme='colored'/>
    </Provider>
  </Router>

)
