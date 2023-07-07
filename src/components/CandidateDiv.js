import React from 'react'
import { motion } from 'framer-motion';

const CandidateDiv = ({name,age,location,role,index}) => {
  return (
    <motion.div 
    initial={{ y: 20, opacity: 0 }}
    transition={{
      delay: index*0.1,
      duration: 0.2
    }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{once:true}}
    className='w-full h-16 flex justify-start items-center shadow-lg border-2 border-[#dfded7] mt-4 rounded-xl hover:shadow-2xl duration-200'>
      <div className='flex-1  flex justify-center text-lg font-medium'>{name}</div>
      <div className='flex-1  flex justify-center text-lg font-medium'>{age}</div>
      <div className='flex-1  flex justify-center text-lg font-medium'>{location}</div>
      <div className='flex-1  flex justify-center text-lg font-medium'>{role}</div>
    </motion.div>
  )
}

export default CandidateDiv
