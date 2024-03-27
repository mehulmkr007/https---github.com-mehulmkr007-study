import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from 'react-router-dom';


const LoginForm = ({setIsLoggedIn}) => {

    const [formData , setFormData] = useState(
        {
            email : '',
            password : ''
        }
    )

    function changeHandler(event){
        
        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )
    }

    const [showPass , setShowPass] = useState(false)


  return (
    
      <form>
        <label>
            <p>Email <sup>*</sup></p>

            <input 
                onChange={changeHandler}
                required
                type='email'
                name='email'
                value={formData.email}
                placeholder='Enter your email'
            />
        </label>

        <label>
            <p>Password <sup>*</sup></p>

            <input 
                onChange={changeHandler}
                required
                type= {showPass ? ('text') : ('password') }
                name='password'
                value={formData.password}
                placeholder='Enter password'
            />
                <span 
                    onClick={ () => setShowPass((prev) => !prev) }
                >    
                    {
                        showPass ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
                    }
                </span>
        </label>


        <Link to='#'>
            <p>Forgott password</p>
        </Link>

        <div>
            <button>
                Sign In
            </button>
        </div>
      </form>
    
  )
}

export default LoginForm
