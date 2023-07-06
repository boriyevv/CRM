import React from 'react'
import { Link } from 'react-router-dom'
import './dashboardmain.scss'

const DashboardMain = () => {
    return (
        <div className='container w-100 my-5'>

            <h1 className='text-success d-block'>Dashboard</h1>
            <h3 className='text-success '><i className="fas fa-user my-3 text-success "></i> Welcome Asadbek</h3>

            <div className="d-flex gap-2">
                <Link><button className="btn btn-success"><i className="fa-regular fa-user"></i> Edit Profile</button></Link>
                <Link><button className="btn btn-success"> <i className="fab fa-black-tie text-light"></i> Add Experience</button></Link>
                <Link><button className="btn btn-success"><i className="fas fa-graduation-cap text-light"></i> Add Education</button></Link>
            </div>

            <h3 className='text-success'>Experience Credentials</h3>


        </div>
    )
}

export default DashboardMain