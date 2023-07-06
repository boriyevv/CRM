import React from 'react'
import { Link } from 'react-router-dom'
import './landing.scss'
const Landing = () => {
    return (

        <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-center'>
            <h1 className='landingtitle text-success '>CRM SYSTEMS</h1>
            <p className='landing-text text-light mt-3 '>Manage your company via CRM app, and feel the comfortness of innovation technology</p>
            <div className="btn-wrap d-flex gap-3">
                <Link to="./register" className='text-decoration-none text-light' >
                    <button className="landingbtn btn btn-outline-success mt-3">
                        Sign Up
                    </button>
                </Link>
                <Link to="/login" className='text-decoration-none text'>
                    <button className="landingbtn btn btn-outline-light mt-3">
                        Login
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Landing