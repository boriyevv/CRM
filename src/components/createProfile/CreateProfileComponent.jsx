import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

//  style

import './CreateProfile.scss'



const CreateProfileComponent = () => {

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



    const [urls, setUrls] = useState(false) 


    function openUrl(e){
        e.preventDefault()
        setUrls(!urls)
    }



    return (
        <div className='container my-5'>
            <h1 className="text-success">Create Your Profile</h1>
            <h3 className='text-success '><i className="fas fa-user my-3 text-success "></i> Let's get some information to make you</h3>
            <p className='text-success'></p>
            <select className="form-select text-success bg-transparent" aria-label="Default select example">
                <option defaultValue="Manager">Manager</option>
                <option disabled>*Select professional status</option>
                <option value="1">Developer</option>
                <option value="2">Junior Developer</option>
                <option value="3">Senior Developer</option>
                <option value="4">Manager</option>
                <option value="5">Student or learning</option>
                <option value="6">Instructor or teacher</option>
                <option value="7">Intern</option>
                <option value="8">Other</option>
            </select>
            <p className='text-success'>Give us an idea of where you are at in your career</p>
            <input type="text" className='bg-transparent form-control my-3 text-success' placeholder='Company' />
            <p className='text-success'>Could be your own company or one you work for</p>
            <input type="text" className='bg-transparent form-control my-3 text-success' />
            <p className='text-success'>Could be your own or a company website</p>
            <input type="text" className='bg-transparent form-control my-3 text-success' placeholder='Location' />
            <p className='text-success'>City and state suggested (e.g Boston, MA)</p>
            <input type="text" className='bg-transparent form-control my-3 text-success' placeholder='Skills' />
            <p className='text-success'>Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</p>
            <input type="username" className='bg-transparent form-control my-3 text-success' placeholder='GitHub Username' />
            <p className='text-success'>If you want your latest repos and a Github link, include your username</p>
            <div className="form-floating ">
                <textarea className="form-control bg-transparent  my-3 text-success" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label htmlFor="floatingTextarea " className='text-success'>A short BIO of yoursels</label>
            </div>
            <p className='text-success ' >Tell us a little about yourself</p>


            <div className=' d-flex align-items-center gap-3' >
                <button className="btn btn-outline-success w-25 my-5" onClick={openUrl}>Add Social Network Links</button>
                <p className='text-success my-5'>Optional</p></div>

            <div className= {!urls ? "active": ''}  >
                <div className="d-flex align-items-center gap-2">
                    <i className="fab fa-twitter fa-2x text-info"></i>
                    <input type="text" placeholder='Twitter URL' className='bg-transparent form-control my-3 text-success' />
                </div>
                <div className="d-flex align-items-center gap-2">
                    <i className="fab fa-facebook fa-2x  text-primary "></i>
                    <input type="text" placeholder='Facebook URL' className='bg-transparent form-control my-3 text-success' />
                </div>
                <div className="d-flex align-items-center gap-2">
                    <i className="fab fa-youtube fa-2x text-danger "></i>
                    <input type="text" placeholder='You Tube URL' className='bg-transparent form-control my-3 text-success' />
                </div>
                <div className="d-flex align-items-center gap-2">
                    <i className="fab fa-linkedin fa-2x text-primary"></i>
                    <input type="text" placeholder='Linkedin URL' className='bg-transparent form-control my-3 text-success' />
                </div>
                <div className="d-flex align-items-center gap-2">
                    <i className="fab fa-instagram fa-2x text-danger"></i>
                    <input type="text" placeholder='Instagram URL' className='bg-transparent form-control my-3 text-success' />
                </div>
            </div>
            <div className='btn-wrapper d-flex gap-3 my-5'>
                <Link to="./dashboard" className='w-25 text-decoration-none text-light' >
                    <button className="landingbtn w-100 btn btn-primary">
                        Send
                    </button>
                </Link>
                <Link to="/createdashboard" className='w-25 text-decoration-none text'>
                    <button className="landingbtn w-100 btn btn-outline-light">
                        Go Back
                    </button>
                </Link>
            </div >







        </div>
    )
}

export default CreateProfileComponent