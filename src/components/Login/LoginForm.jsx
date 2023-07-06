import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'






const LoginForm = () => {



    const navigate = useNavigate()

    const [values, setValues] = useState({
        email: "",
        password: "",
    })


    function handleInpChange(e) {
        setValues((oldValues) => ({ ...oldValues, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        let token = localStorage.getItem("token")
        if (token) {
            navigate("/createdashboard")
        }
    })



    async function handleRegister(e) {
        e.preventDefault()
        // if (values.password !== values.confirmPassword) {
        //     toast("Passwords do not match", { type: "error" })

        //     return;
        // }


        try {
            let { data } = await axios.post("/auth", values)
            console.log(data)

            let { token } = data

            // console.log(token)

            localStorage.setItem("token", token)
            axios.defaults.headers.common["x-auth-token"] = `Bearer ${token}`
            toast("Succesfully Logged in", { type: "success" })
            navigate("/createdashboard")


        } catch (error) {
            // console.log(error)
            toast(error.message, { type: "error" })
        }

    }




    return (
        <div className='container w-100 shadow my-5'>

            <h1 className='text-success d-block'>Sign Up</h1>
            <h3 className='text-success '><i className="fas fa-user my-3 text-success "></i> Sign Into Your Account</h3>

            <form onSubmit={handleRegister}>

                <label className='text-success'>E-Mail Address</label>
                <input type="email" name='email' id='email' value={values.email} onChange={handleInpChange} required className='bg-transparent form-control my-3 text-success' placeholder='Email Address' />

                <label className='text-success'>Password</label>
                <input type="password" name='password' id='password' min={6} value={values.password} onChange={handleInpChange} required className=' text-success bg-transparent form-control my-3' placeholder='Password' />


                <button className="btn btn-outline-success w-25 my-5">Log In</button>


            </form>

            <span className='text-light mt-5'>Don't have an account? </span> <Link to="/register" className='mx-3 text-success text-decoration-none'>Sign Up</Link>


        </div>
    )

}

export default LoginForm