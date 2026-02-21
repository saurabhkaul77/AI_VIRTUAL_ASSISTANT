import React from 'react'
import Card from '../components/Card'
import download from "../assets/download.jpg"
import { IoMdImages } from "react-icons/io";


function Customize() {
  return (
    <div className='w-full h-screen bg-linear-to-t from-[black] to-[#17225d] flex justify-center items-center flex-col p-[20px]'>

        <h1 className='text-white text-[30px] text-center mb-[30px]'>Select your <span className='text-blue-300'>Assistant Image</span></h1>
      <div className='w-[90%]  max-w-[900px] flex justify-center items-center flex-wrap gap-[15px]'>
        <Card image={download}/>
        <Card image={download}/>
        <Card image={download}/>
        <Card image={download}/>
        <Card image={download}/>
        <Card image={download}/>
        <Card image={download}/>

        <div className='w-[120px] h-[190px] lg:w-[170px] lg:h-[260px] overflow-hidden bg-[black] 
            border-2 border-[#2127c0] rounded-2xl hover:shadow-2xl
            hover:shadow-blue-900 cursor-pointer hover:border-2
            hover:border-white flex items-center justify-center'>

            <IoMdImages className='text-white h-[35px] w-[35px] '/>

        </div>

      </div>
    </div>
  )
}

export default Customize
