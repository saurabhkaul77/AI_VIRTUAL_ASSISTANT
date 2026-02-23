import React from 'react';
import bg2 from "../assets/bg2.jpg"
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import axios from "axios";
import { userDataContext } from '../context/UserContext';


function SignUp(){
    const navigate = useNavigate()    

    const[showPassword, setShowPassword] = useState(false)
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[error, setError] = useState("")
    const[loading, setLoading]  = useState(false)

    const {serverUrl,userData, setUserData} = useContext(userDataContext)
    const handleSignUp=async(e)=>{
        e.preventDefault()
        setError("")
        setLoading(true)
        try {
            let result = await axios.post(`${serverUrl}/api/auth/signup`, 
                {name, email, password},
                {withCredentials: true})                
                setUserData(result.data)
                setLoading(false)
                navigate("/customize")
        }catch (error) {
            console.log(error);
            setUserData(null)
            setLoading(false)
            setError(error.response.data.message)
        }
    }
  return (
    <div className='w-full h-[100vh] bg-cover flex justify-center items-center' 
        style={{backgroundImage:`url(${bg2})`}}>
            
        <form className='w-[90%] h-[600px] max-w-[550px] bg-[#0000003c] 
            backdrop-blur shadow-lg shadow-black px-[20px]
            flex flex-col items-center justify-center gap-[20px]' onSubmit={handleSignUp}>
            
            <h1 className='text-white text-[30px] font-semibold mb-[30px]'>Register to   
                 <span className='text-blue-400'> Virtual Assistance</span></h1>

            <input type="text" placeholder='Enter your Name' 
                className='w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]' required onChange={(e)=>setName(e.target.value)} value={name}/>
            
            <input type="email" placeholder='Email' 
                className='w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]' required onChange={(e)=>setEmail(e.target.value)} value={email}/>

            <div className='w-full h-[60px] border-2 border-white bg-transparent text-white rounded-full text-[18px] relative'>
                <input type={showPassword ? "text" : "password"} placeholder='Password' 
                    className='w-full h-full outline-none bg-transparent placeholder-gray-300 px-[20px] py-[10px] rounded-full' required onChange={(e)=>setPassword(e.target.value)} value={password}/>                    
                    {!showPassword && <IoEye className='absolute top-[17px] right-[20px] text-white w-[25px] h-[25px] cursor-pointer' 
                        onClick={() => setShowPassword(true)}/> }
                    {showPassword && <IoMdEyeOff className='absolute top-[17px] right-[20px] text-white w-[25px] h-[25px] cursor-pointer' 
                        onClick={() => setShowPassword(false)}/> }
            </div>

            {error.length > 0 && <p className='text-red-400 text-[18px]'>*{error}</p>}

            <button className='min-w-[150px] h-[60px] mt-[30px] bg-white text-black font-semibold rounded-full text-[18px]' disabled={loading}>{loading? "Loading..." : "Sign Up"}</button>

            <p className='text-white text-[18px] cursor-pointer' onClick={() => navigate("/signin")}>Already have an account? <span className='text-blue-400'> Sign In</span></p>
        </form>

    </div>
  );
}

export default SignUp;
