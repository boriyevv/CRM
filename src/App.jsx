// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import CreateDashboard from './pages/CreateDashboard'
import CreateProfil from './pages/CreateProfil'
// import Dashboard from './pages/Dashboard'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home/Home'
// import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Redirects from 'redirects'

function App() {
  // const [count, setCount] = useState(0)

  return (

    <>

    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createdashboard" element={<CreateDashboard />} />
        <Route path="/createprofile" element={<CreateProfil />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}


        <Route path="*" element={<Redirects to="/" />} />
      </Routes>
    </>
    

  )
}

export default App
