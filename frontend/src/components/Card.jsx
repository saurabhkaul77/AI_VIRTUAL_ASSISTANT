import React, { useContext } from 'react'
import { userDataContext } from '../context/userContext'

function Card({image}) {
  const {serverUrl,userData, setUserData,backendImage,
    setBackendImage,frontendImage, setFrontendImage,
    selectedImage, setSelectedImage} = useContext(userDataContext)
  return (
    <div className={`w-[120px] h-[190px] lg:w-[170px] lg:h-[260px] 
        overflow-hidden bg-[black] border-2 border-[#2127c0] 
        rounded-2xl hover:shadow-2xl hover:shadow-blue-900 
        cursor-pointer hover:border-2 hover:border-white
        ${selectedImage === image ? "border-3 border-white shadow-2xl shadow-blue-900" : null} `}onClick={()=>{
          setSelectedImage(image)
          setBackendImage(null)
          setFrontendImage(null)
        }}>

      <img src={image} className='h-full object-cover'/>
    </div>
  ) 
}

export default Card
