import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

const SignUpForm = ({setIsLoggedIn}) => {
  const [formData , setFormData] = useState(
      {
        firstName : '',
        lastName : '',
        email : '',
        password : '',
        confirmPassword : ''
      }
    )
    
  function changeHandler(event){
    setFormData( 
          {
            ...formData,
            [event.target.name]:event.target.value
          }
        ) 
        
  }

  function submitHandler(e){
    e.preventDefault()
  }
  console.log(formData)
  const [showPass , setShowPass] = useState(false)
  return (
    <div>
      
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        {/* first and last name */}
        <div>
          <label>
              <p>First Name<sup>*</sup></p>

              <input
                required
                onChange={changeHandler}
                type="text"
                name="firstName"
                value={formData.firstName}
                placeholder="Enter First Name"
              />
          </label>

          <label>
              <p>Last Name<sup>*</sup></p>

              <input
                required
                onChange={changeHandler}
                type="text"
                name="lastName"
                value={formData.lastName}
                placeholder='Enter Last Name'
              />
          </label>
        </div>

        <label>
            <p>Email Address<sup>*</sup></p>

            <input
              required
              onChange={changeHandler}
              type='email'
              name='email'
              value={formData.email}
              placeholder='Enter Valid Email'
            />
        </label>

        {/* password */}
        <div>
          <label>
              <p>Create Password<sup>*</sup></p>

              <input
                required
                onChange={changeHandler}
                type={showPass ? 'text' : 'password'}
                name='password'
                value={formData.password}
                placeholder='Enter Password'
              />
              <span
                onClick={() => setShowPass((prev) => !prev)}
              >
                {
                  showPass ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>
                }
              </span>
          </label>

          <label>
              <p>Confirm Password<sup>*</sup></p>

              <input
                required
                onChange={changeHandler}
                type={showPass ? 'text' : 'password'}
                name='confirmPassword'
                value={formData.confirmPassword}
                placeholder='Confirm Password'
              />
          <span
                onClick={() => setShowPass((prev) => !prev)}
              >
                {
                  showPass ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>
                }
              </span>
          </label>
        </div>

        <div>
          <button>
            Create Account
          </button>
        </div>     
      </form>
    </div>
  )
}

export default SignUpForm
