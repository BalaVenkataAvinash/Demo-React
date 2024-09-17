import React from 'react'
import { Link } from 'react-router-dom'
import '../stylings/Navigation.css'
import { useNavigate } from 'react-router-dom'

export default function Navigation() {
  const auth = localStorage.getItem("student_id")
  const navigate = useNavigate()
  
  function handleLogout() {
    localStorage.removeItem("student_id")
    navigate('/')
  }
  return (
    <div >
      {
        auth ?
          <div className='navbar'>
            <Link to='/' >
              Home
            </Link>
            <Link to='/patient'>
              Patient
            </Link>
            <Link to='/contact'>
              Contact
            </Link>
            <Link onClick={handleLogout}>Logout</Link>
          </div> :
          <div className='navbar'>
            <Link to='/' >
              Home
            </Link>
            <Link to='/login'>
              Login
            </Link>
            <Link to='/register'>
              Register
            </Link>
            <Link to='/contact'>
              Contact
            </Link>
          </div>
      }
    </div>
  )
}
