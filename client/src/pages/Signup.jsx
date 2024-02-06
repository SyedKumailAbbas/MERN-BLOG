import { Label, TextInput, Button } from 'flowbite-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useRef } from 'react'
const Signup = () => {
  const [formdata, setformdata] = useState({})
  const formRef = useRef();
  const handleChange = (e) => {
    setformdata({ ...formdata, [e.target.id]: e.target.value })
  }

  const formsubmit = (e) => {
    e.preventDefault()
    axios.
      post(`http://localhost:3000/auth/signup`, formdata)
      .then(() => {
        console.log("signup succesfully")
      }).catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-10 max-w-2xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left side */}
        <div className='flex-1'>
          <Link to="/" className=' font-bold dark:text-white text-4xl'>
            <span className='px-1 bg-gradient-to-l from-orange-300 via-orange-200
   to-yellow-100 rounded-lg dark:text-white '>
              B
            </span>
            Blog
          </Link>
          <p>
            @ All copyrights reserved to its developer
          </p>
        </div>

        <div className='flex-1'>
          {/* right side */}
          <form className='flex flex-col gap-4' onSubmit={(e) => {
            formsubmit(e);
            formRef.current.reset(); // form reset
          }}
            ref={formRef}>
            <div>
              <Label value='Email' />
              <TextInput type='email' name='email' placeholder='yourname@company.com' id='email' onChange={handleChange} />

            </div>

            <div>
              <Label value='Username' />
              <TextInput type='text' name='username' placeholder='name12' id='username' onChange={handleChange} />

            </div>

            <div>
              <Label value='Password' />
              <TextInput type='password' name='password' placeholder='****' id='password' onChange={handleChange} />

            </div>
            <Button gradientDuoTone='purpleToBlue' type='submit' >
              Sign Up
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>
              Have an account?
            </span>
            <Link className=' text-blue-600' to='/Signin' >
              sign-in
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Signup
