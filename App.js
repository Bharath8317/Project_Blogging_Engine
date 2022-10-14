import React, { useContext } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import AppContext from './Context/AppContext/AppContext'
import Login from './pages/Login'
import DashboardPage from './pages/DashboardPage'
import AddBlogs from './pages/AddBlogs'
import DashboardPage1 from './DashboardPage1'
import HomePage from './pages/HomePage'
import EditData from './pages/EditData'
export default function App() {

  const appContext=useContext(AppContext)
  // let[userloggedIn,setUserLoggedIn]=useState(false)

  return (
    <div>
      
      <button onClick={()=>{
        appContext.setUserLoggedIn(!appContext.userloggedIn)
      }}>Toggle Button</button>

      <div className='flex space-x-3'>

      <Link to={'/'}>Home</Link>
      <span>|</span>

        <Link to={'/Login'}>
            <p>Login</p>
        </Link>
      </div>
        
      
      <Routes>

      {appContext.userloggedIn?(
        <>

        <Route index element={<DashboardPage1/>}/>
        <Route path='/DashboardPage1' element={<DashboardPage1/>}/>
        <Route path='/AddBlogs' element={<AddBlogs/>}/>
        <Route path='/EditBlogs/:id' element={<EditData/>}/>

        </>
        ):(
          <>
                        <Route index element={<HomePage/>}/>

        <Route path='/Login' element={<Login/>}/>
        </>
        )}
      </Routes>
      
    </div>
  )
}
