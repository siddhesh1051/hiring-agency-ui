import React, { useState } from 'react'
import Hero1 from '../../img/register.svg'
import Hero2 from '../../img/login.svg'
import "../../App.css"
import Login from './Login';
import Register from './Register';


const Authentication = () => {

  const [isNew, setisNew] = useState(false)

  return (
    <div className='flex bg-[#f8eeec] h-full '>


      <div className='container bg-white flex justify-center items-center h-full mx-[8%] my-10 rounded-3xl lg:rounded-none p-1 lg:p-0 '  >
        {
          isNew ? <Register isNew={isNew} setisNew={setisNew} />
            
          :<Login isNew={isNew} setisNew={setisNew} />
        }
        <div className=' modal-right lg:flex-[1.3] lg:overflow-y-hidden lg:flex hidden '>
          {
            isNew?
            <img className='hero' src={Hero1} alt="" />
            
            :
            <img className='hero' src={Hero2} alt="" />
          }
         
        </div>
      </div>


    </div>

  )
}

export default Authentication
