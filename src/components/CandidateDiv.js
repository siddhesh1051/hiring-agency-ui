import React from 'react'

const CandidateDiv = ({name,age,location,role}) => {
  return (
    <div className='w-full h-16 flex justify-start items-center shadow-lg border-2 border-[#dfded7] mt-4 rounded-xl hover:shadow-2xl duration-200'>
      <div className='flex-1  flex justify-center text-lg font-medium'>{name}</div>
      <div className='flex-1  flex justify-center text-lg font-medium'>{age}</div>
      <div className='flex-1  flex justify-center text-lg font-medium'>{location}</div>
      <div className='flex-1  flex justify-center text-lg font-medium'>{role}</div>
    </div>
  )
}

export default CandidateDiv
