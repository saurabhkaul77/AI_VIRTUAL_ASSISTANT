import React, { useContext, useRef, useState } from 'react'
import Card from '../components/Card'
import download from "../assets/download.jpg"
import one from "../assets/one.jpg"
import two from "../assets/two.jpg"
import three from "../assets/three.jpg"
import four from "../assets/four.jpg"
import five from "../assets/five.jpg"
import seven from "../assets/seven.jpg"
import { IoMdImages } from "react-icons/io";
import { userDataContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md'


function Customize() {
  const navigate = useNavigate()
  const {serverUrl,userData, setUserData,backendImage, setBackendImage,frontendImage, setFrontendImage,selectedImage, setSelectedImage} = useContext(userDataContext)
  const inputImage = useRef();

  const handleImage=(e)=>{
    const file = e.target.files[0]
    setBackendImage(file)
    setFrontendImage(URL.createObjectURL(file))

  }
  return (
    <div className='w-full h-screen bg-linear-to-t from-[black] to-[#17225d] flex justify-center items-center flex-col p-[20px]'>
        <MdKeyboardBackspace className='cursor-pointer absolute top-[30px] left-[30px] text-white h-[38px] w-[38px] ' 
                onClick={()=> navigate("/")}/>
        <h1 className='text-white text-[30px] text-center mb-[30px]'>Select your <span className='text-blue-300'>Assistant Image</span></h1>
      <div className='w-[90%]  max-w-[900px] flex justify-center items-center flex-wrap gap-[15px]'>
        <Card image={download}/>
        <Card image={one}/>
        <Card image={two}/>
        <Card image={three}/>
        <Card image={four}/>
        <Card image={five}/>
        <Card image={seven}/>

        <div className={`w-[120px] h-[190px] lg:w-[170px] lg:h-[260px] overflow-hidden bg-[black] 
            border-2 border-[#2127c0] rounded-2xl hover:shadow-2xl
            hover:shadow-blue-900 cursor-pointer hover:border-2
            hover:border-white flex items-center justify-center
            ${selectedImage === "input" ? "border-3 border-white shadow-2xl shadow-blue-900" : null} `}
            onClick={() => {
              inputImage.current.click()
              setSelectedImage("input")

              }}>
            
            {!frontendImage && <IoMdImages className='text-white h-[35px] w-[35px] '/>}
            {frontendImage && <img src={frontendImage} className='h-full object-cover'/>}
        </div>

        <input type="file" accept='image/*' ref={inputImage} hidden
        onChange={handleImage}/>
      </div>
      {selectedImage && <button className='min-w-[150px] h-[60px] mt-[30px] cursor-pointer bg-white text-black font-semibold rounded-full text-[18px]' 
       onClick={()=>navigate("/customize2")}>Next</button>}
      
    </div>
  )
}

export default Customize
