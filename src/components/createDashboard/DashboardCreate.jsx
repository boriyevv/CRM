import React from 'react'
import { Link } from 'react-router-dom'

const DashboardCreate = () => {
  return (
    <div className='container w-100 shadow my-5'>

        <h1 className=' text-success d-block'>Dashboard</h1>
        <h3 className='text-success my-5 '><i className="fas fa-user my-3 text-success "></i>Welcome Asadbek</h3>
        <p className='text-success my3'>You have not yet setup your profile, please add some info</p>
        <Link to="/createprofile" className='mx-3 text-success text-decoration-none'> <button className="btn btn-outline-success w-25 my-5">Create Profile</button></Link>
    </div>
  )
}

export default DashboardCreate