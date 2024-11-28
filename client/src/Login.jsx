import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Login = () => {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const navigate = useNavigate()
    const handlesubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/register", {email, password})
        .then(result => {console.log(result)
            navigate("/home")
        }).catch(err => {console.log(err)})
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className="bg-white rounded p-3 w-25">
            <h2>register</h2>
            <form onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="email" 
                    placeholder='Enter Email'
                    autoComplete='off'
                    name='email'
                    className='form-control rounded-0'
                    onChange={(e) => setemail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>password</strong>
                    </label>
                    <input type="password"
                    placeholder='Enter Password'
                    name='password'
                    className='form-control rounded-0' 
                    onChange={(e)=> setpassword(e.target.value)}/>
                </div>
                
                <p>Alreaady have an accoutn</p>
            </form>
            <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                Login
            </Link>

        </div>

    </div>
  )
}

export default Login