import React from 'react'

function Card({image}) {
  return (
    <div className='w-[120px] h-[190px] lg:w-[170px] lg:h-[260px] overflow-hidden bg-[black] border-2 border-[#2127c0] rounded-2xl hover:shadow-2xl hover:shadow-blue-900 cursor-pointer hover:border-2 hover:border-white'>

      <img src={image} className='h-full object-cover'/>
    </div>
  )
}

export default Card
