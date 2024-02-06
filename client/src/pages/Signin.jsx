import axios from 'axios'
import { Label, TextInput, Button } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {
  const [formdata,setformdata]=useState({})
  const navigate=useNavigate()
  const handleChange=(e)=>{
    console.log(e.target.value)
setformdata({...formdata,[e.target.id]: e.target.value})
  }
  const formsubmit=(e)=>{
    e.preventDefault()
axios
.post(`http://localhost:3000/auth/Signin`,formdata)
.then(()=>{
  console.log("sign in successfully")
  navigate('/')
}
).catch((err)=>{
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
          <form className='flex flex-col gap-4' onSubmit={formsubmit}>

            <div>
              <Label value='Email' />
              <TextInput type='email' onChange={handleChange} placeholder='name12@gmail.com' id='email' />

            </div>

            <div>
              <Label value='Password' />
              <TextInput type='password' onChange={handleChange} placeholder='****' id='password' />

            </div>
            <Button gradientDuoTone='purpleToBlue' type='submit'>
              Sign In
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>
              Dont't have an account?
            </span>
            <Link className=' text-blue-600' to='/Signup' >
              sign-Up
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Signin
