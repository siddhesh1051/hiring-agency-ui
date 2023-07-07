import React from 'react'
import { motion } from 'framer-motion';

const JobCard = ({ logo, name, location, role, description, salary }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      transition={{
        delay: 0.15,
        duration: 0.4
      }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      className='flex flex-col items-start gap-1 w-48 h-48 bg-white border-2 border-[#f4f4f4] mr-7 rounded-2xl p-3 mb-6 shadow-lg'>
      <div className='flex justify-between'>
        <img className=' h-12 w-12 bg-cover mr-4' src={logo} alt="" srcset="" />
        <div className='flex flex-col'>
          <h1 className='text-black font-semibold text-lg'>
            {name}
          </h1>
          <p className='text-[#727171] text-sm'>
            {location}
          </p>
        </div>

      </div>

      <div className='flex place-items-start text-md font-bold mt-2'>
        {role}
      </div>

      <div className='text-[#9e9d9d] font-semibold text-xs text-start'>
        {description}
      </div>

      <div className='text-[#252424] font-semibold text-md text-start mt-2'>
        ₹{salary}/month
      </div>

    </motion.div>
  )
}

export default JobCard
