import React from 'react'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import frameImage from '../assets/frame.png'

const Template = ({title , des1 , des2 , image, formtype , setIsLoggedIn}) => {
  return (
    <div>
      <div>
        <h1>
            {title}
        </h1>

        <p> 
            <span>{des1}</span>
            <span>{des2}</span>
        </p>
    
        {
            formtype === "signup" ?
             (<SignUpForm setIsLoggedIn ={setIsLoggedIn}/>) 
             : (<LoginForm setIsLoggedIn = {setIsLoggedIn}/>) 
        }

        <div>
            <div></div>
            <p>or</p>
            <div></div>
        </div>

        <button>
            <i></i>
            <p>Sign Up With Google</p>
        </button>
      </div>

      <div>
        <img
            src={frameImage}
            alt='#image'
            width={558}
            height={504}
            loading='lazy'
        />
        <img
            src={image}
            alt='#image'
            width={558}
            height={504}
            loading='lazy'
        />
      </div>
    </div>
  )
}

export default Template
