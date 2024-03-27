import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';


const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex content-between p-3 justify-evenly'>

        <Link to='/'> 
            <img src={logo} width={160} height={32} loading='lazy'/>
        </Link>

        <nav>
            <ul className='flex gap-3'>
                <li>
                  <Link to='/'>Home</Link>
                </li>

                <li>
                  <Link to='/'>About</Link>
                </li>

                <li>
                  <Link to='/'>Contact</Link>
                </li>
            </ul>
        </nav>

        <div className='flex gap-4'>
            {
              !isLoggedIn &&
              <Link to='/signup' >
                <button>SignUp</button>
              </Link>
            }

            {
              !isLoggedIn &&
              <Link to='/login'>
                <button>Log In</button>
              </Link>
            }
            {
              isLoggedIn &&
              <Link to='/'>
              <button onClick={()=>{
                    setIsLoggedIn(false)
                    toast.success("Log Out")
                }}>

                Log Out
              </button>
              </Link>
            }
            {
              isLoggedIn &&
              <Link to='/dashboard'>
              <button 
              onClick={()=>{
                    setIsLoggedIn(false)
                }}
                >

                Dashboard
              </button>
              </Link>
            }
        </div>
    </div>
  )
}

export default Navbar
