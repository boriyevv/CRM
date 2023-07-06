import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

const Header = () => {
    return (
        <div className='header-wrapper d-flex justify-content-between align-items-center bg-gradient p-2 sticky-top '>


            <div className="header-left">
                <Link to='/' className='headreLogo mx-4 text-light'><i className="fas fa-code"></i> CompanyLogo </Link>
            </div>
            <div className="header-right mx-4">
                <Link to='/profiles' className='headerlink mx-2'> Users</Link>
                <Link to='/register' className='headerlink mx-2'> Register</Link>
                <Link to='/login' className='headerlink mx-2'> Login</Link>
            </div>

        </div>
    )
}

export default Header