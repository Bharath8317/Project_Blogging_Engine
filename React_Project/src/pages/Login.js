import React, { useContext, useState } from 'react'
import AppContext from '../Context/AppContext/AppContext'
import Login_image from './Login_image.png'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function Login() {
    const appContext=useContext(AppContext)
    const navigate=useNavigate();

    let[userName,setUserName]=useState("")
    let[password,setPassword]=useState("")

    function checkLogin(){
        if((userName===appContext.db.storedusername)&(password===appContext.db.storedpassword))
        {
            // alert("Login Sucessfull")
            toast.success("Sucessfully Logged In")
            appContext.setUserLoggedIn(true)
            navigate('/DashboardPage1')
        }
        else{
            // alert("Enter correct credentials")
            // toast('Sucessfull')
            appContext.setUserLoggedIn(false)
            toast.error("Lgoin Failed")

        }

    }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-screen object-cover' src={Login_image} alt="Image" />
        </div>

        <div className=' flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                <h2 className='text-4xl text-white font-bold text-center'>Login Page</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Username</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text"
                    value={userName} onChange={(event)=>{
                        setUserName(event.target.value)
                    }} />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input  className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' 
                    type="password" 
                    value={password} onChange={(event)=>{
                        setPassword(event.target.value)
                    }}/>
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Forgot Password</p>
                </div>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' 
                onClick={checkLogin}>SIGNIN</button>
                
            </form>
        </div>
    </div>
    
  )
}
