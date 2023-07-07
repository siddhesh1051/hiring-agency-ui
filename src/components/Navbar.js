import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";


const Navbar = () => {

    const [isLogin, setisLogin] = useState(false)
    const navigate = useNavigate();

  return (
    
      <header className="p-12 py-4 bg-white px-36 ">
        {/* Navigation bar */}
        <nav className="container mx-auto flex justify-between items-center px-4">
          <h2 className='font-bold font-[Oswald] text-4xl'><span className='font-[Oswald] font-medium text-yellow-600 '>hire</span>Monk</h2>
          <div className='flex justify-between items-center'>

            <a href="/" className='mr-16'>Home</a>
            <a href="/search" className='mr-16'>Search Candidates</a>
            <a href="/" className='mr-16'>Parters</a>
            <a href="/" className='mr-16'>Contact Us</a>
          </div>{
          !isLogin?<button className='bg-gradient-to-r font-semibold text-black shadow-xl from-[#ffcb3e] to-[#b48403] py-2 px-6 rounded-[50px]'
            onClick={()=>{navigate('/auth')}}
          >
            
            Login</button>
          :<button className='bg-gradient-to-r font-semibold text-black shadow-xl from-[#ffcb3e] to-[#b48403] py-2 px-6 rounded-[50px]'
            onClick={()=>{navigate('/'); localStorage.removeItem('email'); localStorage.removeItem('password');setisLogin(false)}}
          >
            
            Logout</button>
}

        </nav>
      </header>
    
  )
}

export default Navbar
