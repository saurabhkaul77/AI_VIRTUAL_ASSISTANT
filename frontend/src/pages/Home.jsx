import React, { useContext } from 'react'
import { userDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const {userData, serverUrl, setUserData} = useContext(userDataContext)

  const handleLogOut=async()=>{
    try {
      const result = await axios.get(`${serverUrl}/api/auth/logout`,
        {withCredentials: true})
        navigate("/signin")
        setUserData(null)
    } catch (error) {
      setUserData(null)
      console.log(error);      
    }
    
  }
  return (
    <div className='w-full gap-[20px] h-screen bg-linear-to-t from-[black] to-[#17225d] flex justify-center items-center flex-col '>
      <button className='min-w-[160px] h-[50px] mt-[30px]
       bg-white text-black font-semibold rounded-full 
        text-[18px] absolute top-[20px] right-[20px] cursor-pointer' onClick={handleLogOut}>Log Out</button>
      <button className='min-w-[160px] h-[50px] mt-[30px]
       bg-white text-black font-semibold rounded-full 
        text-[18px] absolute top-[80px] right-[20px] cursor-pointer' onClick={()=>navigate("/customize")}>Customize here</button>
      <div className='w-[300px] h-[400px] flex justify-center items-center overflow-hidden rounded-4xl shadow-lg'>
        <img src={userData?.assistantImage} className='h-full object-cover '/>
      </div>
      <h1 className='text-white text-[25px] font-semibold text-center mb-[30px]'>{userData?.assistantName}</h1>
    </div>
  )
}

export default Home
