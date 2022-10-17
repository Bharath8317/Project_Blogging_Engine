import React, { useContext } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import AppContext from './Context/AppContext/AppContext'
import Login from './pages/Login'
import DashboardPage from './pages/DashboardPage'
import AddBlogs from './pages/AddBlogs'
import DashboardPage1 from './DashboardPage1'
import HomePage from './pages/HomePage'
import EditData from './pages/EditData'
import SingleBlog from './pages/SingleBlog'
import { Toaster } from "react-hot-toast";

export default function App() {

  const appContext=useContext(AppContext)
  // let[userloggedIn,setUserLoggedIn]=useState(false)

  return (
    <div>
        <Toaster position="top-center" reverseOrder={false} />

      
      {/* <button onClick={()=>{
        appContext.setUserLoggedIn(!appContext.userloggedIn)
      }}>Toggle Button</button> */}

      <div className='flex space-x-3 py-5 ml-5'>

      <Link to={'/'}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      </Link>
      <span>|</span>

        <Link to={'/Login'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>
        </Link>
      </div>
        
      
      <Routes>

      {appContext.userloggedIn?(
        <>

        <Route index element={<DashboardPage1/>}/>
        <Route path='/DashboardPage1' element={<DashboardPage1/>}/>
        <Route path='/AddBlogs' element={<AddBlogs/>}/>
        <Route path='/EditBlogs/:id' element={<EditData/>}/>
        <Route path='/SingleBlog/:id' element={<SingleBlog/>}/>


        </>
        ):(
          <>
          <Route index element={<HomePage/>}/>

        <Route path='/Login' element={<Login/>}/>
        <Route path='/SingleBlog/:id' element={<SingleBlog/>}/>

        </>
        )}
      </Routes>
      
    </div>
  )
}
