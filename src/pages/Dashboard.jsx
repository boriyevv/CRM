import axios from 'axios'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import DashboardCreate from '../components/createDashboard/DashboardCreate'
import DashboardMain from '../components/Dashboard/DashboardMain'



const Dashboard = () => {

    // const navigate = useNavigate()
    // useEffect(() => {
    //     let token = localStorage.getItem("token")

    //     if (!token) return navigate("/login")

    //     async function getUser() {
    //         try {
    //             let { data } = await axios.get("/auth")
    //         }
    //         catch (error) {
    //             localStorage.removeItem("token")

    //             delete axios.defaults.headers.common["x-auth-token"]


    //         }
    //     }
    //     getUser()
    // }, [])

    return (
        <>
            <DashboardMain />
        </>
    )
}

export default Dashboard