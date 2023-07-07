import React, {  useState } from 'react'
import "../../App.css"
import { useNavigate } from "react-router-dom";
import Sparkle from '../../img/sparkle_black.png'

import toast from 'react-hot-toast'
import { motion } from 'framer-motion';

const Login = ({ isNew, setisNew }) => {



  const navigate = useNavigate();

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')


  const handleEmailChange = (e) => {
    setemail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setpassword(e.target.value)
  }


  const handleLogin = (e) => {
   if( password===localStorage.getItem('password')){
    
   

    localStorage.setItem('email',email)
    localStorage.setItem('password',password)
    navigate("/");
    toast.success("Loogged in Successfully")
   }
   else{
    toast.error("Incorrect Password")

   }
  }



  return (

    <>
      <motion.form 
      initial={{  opacity: 0 }}
      transition={{
        delay: 0.5,
        duration: 0.4
      }}
      whileInView={{ opacity: 1 }}
      viewport={{once:true}}
      className='flex-1 flex justify-start items-start'>


        <div className='modal-left flex-1 flex flex-col gap-2 justify-start lg:items-start items-center'>
          <img src={Sparkle} alt="" className=' w-24 h-24 ml-6' />
          <h1 className=' text-3xl font-medium text-black mx-8'>Welcome to <span className=' text-5xl font-bold text-black'>HireMonk</span></h1>
          <p className=' lg:text-lg text-lg text-[#979696] mx-8'>Welcome Back 👋</p>
          <input className="inputBox m-1 lg:ml-8 lg:w-[70%] w-[90%]"
            type="email"
            placeholder="Email Address"
            name='email'
            value={email}
            onChange={(e) => handleEmailChange(e)}

          />
        
          <input className="inputBox m-1 lg:ml-8 lg:w-[70%] w-[90%]"
            type="password"
            placeholder="Password"
            name='password'
            autoComplete='off'
            value={password}
            onChange={(e) => handlePasswordChange(e)}
          />
         

          <button variant='solid' type='button' onClick={()=>{handleLogin()}} className='bg-[#FFC727] hover:bg-[#FFC727] active:scale-95 text-white text-lg  w-[90%] lg:w-[70%] h-12 rounded-lg mx-8 mt-2 duration-300'>Log in</button>
          <p className='lg:ml-8 mt-2 lg:mt-1 mb-6 lg:mb-1' >Don't have an account <span className='text-[#FFC727] cursor-pointer ml-1 font-semibold' onClick={() => { setisNew(!isNew) }}>Sign up</span></p>
        </div>

      </motion.form>
    </>

  )
}

export default Login
