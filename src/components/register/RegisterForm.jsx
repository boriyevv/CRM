import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'








const RegisterForm = () => {

  const navigate = useNavigate()

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })


  function handleInpChange(e) {
    setValues((oldValues) => ({ ...oldValues, [e.target.name]: e.target.value }))
  }

  useEffect(()=>{
    let token = localStorage.getItem("token")
    if (token) {
      navigate("/createdashboard") 
    }
  })



  async function handleRegister(e) {
    e.preventDefault()
    if (values.password !== values.confirmPassword) {
      toast("Passwords do not match", { type: "error" })

      return;
    }
  

    try {
      let { data } = await axios.post("/users", values)
      console.log(data)

      let { token } = data

      // console.log(token)

      localStorage.setItem("token", token)
      axios.defaults.headers.common["x-auth-token"] = `Bearer ${token}`
      toast("Succesfully Registered", { type: "success" })
      navigate("/createdashboard")


    } catch (error) {
      // console.log(error)
      toast(error.message, {type:"error"})
    }

  }


  return (
    <div className='container w-100 shadow my-5'>

      <h1 className='text-success d-block '>Sign Up</h1>
      <h3 className='text-success '><i className="fas fa-user my-3 text-success "></i> Create Your Account</h3>

      <form onSubmit={handleRegister} >
      <label className='text-success'>Name</label>
        <input type="text" name='name' id='text' value={values.userName} onChange={handleInpChange} required className=' bg-transparent form-control my-3 text-success' placeholder='Name' />
        <label className='text-success'>E-Mail Addrees</label>
        <input type="email" name='email' id='email' value={values.email} onChange={handleInpChange} required className=' bg-transparent form-control my-3 text-success' placeholder='Email Address' />
        <span className='text-success'>This site uses Gravatar so if you want a profile image, use a Gravatar email</span>
        <label className='text-success'>Password</label>
        <input type="password" name='password' id='password' min={4} value={values.password} onChange={handleInpChange} required className=' text-success bg-transparent form-control my-3' placeholder='Password' />
        <label className='text-success'>Re-enter Password</label>
        <input type="password" name='confirmPassword' id='confirmedPassword' min={4} value={values.confirmPassword} onChange={handleInpChange} required className=' text-success bg-transparent form-control my-3 ' placeholder=' Confirm Password' />

        <button className="btn btn-outline-success w-25 my-5">Register</button>


      </form>

      <span className='text-light mt-5'>Already have an account? </span> <Link to="/login" className='mx-3 text-success text-decoration-none'>Sign In</Link>


    </div>
  )
}

export default RegisterForm