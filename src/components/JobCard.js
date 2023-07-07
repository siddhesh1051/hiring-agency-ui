import React from 'react'
import logo from '../img/personpng.png'

const JobCard = () => {
  return (
    <div className='flex flex-col items-start gap-1 w-48 h-48 bg-white border-2 border-[#f4f4f4] mr-6 rounded-2xl p-3 mb-4 shadow-lg'>
      <div className='flex justify-between'>
        <img  className=' h-12 w-12 bg-cover mr-4' src={logo} alt="" srcset="" />
        <div className='flex flex-col'>
            <h1 className='text-black font-semibold text-lg'>
                Company
            </h1>
            <p className='text-[#727171] text-sm'>
                location,loca
            </p>
        </div>
            
      </div>

      <div className='flex place-items-start text-lg font-bold mt-2'>
        Graphic Designer
      </div>

      <div className='text-[#9e9d9d] font-semibold text-xs text-start'>
        we are delighted to offer u a jobndskdsnd sjdbsd
      </div>

      <div className='text-[#252424] font-semibold text-md text-start mt-4'>
      ₹10000/month
      </div>

    </div>
  )
}

export default JobCard
