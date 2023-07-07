import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';


const Navbar = () => {

    const [isLogin, setisLogin] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("email");
        console.log(user)
        user==='' || user?
        setisLogin(true)
        :
        setisLogin(false)
      
        
      }, [])

    return (

        <motion.header 
        initial={{ y: -20, opacity: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.3
              }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{once:true}}
               className="p-12 py-4 bg-white px-36 ">
            {/* Navigation bar */}
            <nav className="container mx-auto flex justify-between items-center px-4">
                <h2 onClick={() => { navigate('/') }}
                    className='font-bold font-[Oswald] text-4xl cursor-pointer'><span className='font-[Oswald] font-medium text-yellow-600 '>hire</span>Monk</h2>
                <div className='flex justify-between items-center text-lg font-medium'>

                    <a href="/" className='mr-16 hover:text-yellow-600 duration-300'>Home</a>
                    <a href="/search" className='mr-16 hover:text-yellow-600 duration-300'>Search Candidates</a>
                    <a href="/" className='mr-16 hover:text-yellow-600 duration-300'>Parters</a>
                    <a href="/" className='mr-16 hover:text-yellow-600 duration-300'>Contact Us</a>
                </div>{
                    !isLogin ? <motion.button 
                    initial={{ scale:0, opacity: 0 }}
                    transition={{
                      delay: 0.15,
                      duration: 0.4
                    }}
                    whileInView={{ scale: 1,opacity: 1 }}
                    viewport={{once:true}}
                    className='bg-gradient-to-r font-semibold text-black shadow-xl hover:shadow-3xl duration-300 from-[#ffcb3e] to-[#b48403] py-2 px-6 rounded-[50px]'
                        onClick={() => { navigate('/auth') }}
                    >

                        Login</motion.button>
                        : <motion.button
                        initial={{ scale:0, opacity: 0 }}
                        transition={{
                          delay: 0.15,
                          duration: 0.4
                        }}
                        whileInView={{ scale: 1,opacity: 1 }}
                        viewport={{once:true}}
                        className='bg-gradient-to-r font-semibold text-black shadow-xl hover:shadow-3xl duration-300 from-[#ffcb3e] to-[#b48403] py-2 px-6 rounded-[50px]'
                            onClick={() => { navigate('/'); localStorage.removeItem('email'); localStorage.removeItem('password'); setisLogin(false) ; toast.success("Logged Out Successfully")}}
                        >

                            Logout</motion.button>
                }

            </nav>
        </motion.header>

    )
}

export default Navbar
