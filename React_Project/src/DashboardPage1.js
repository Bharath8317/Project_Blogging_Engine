import React from "react"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
export default function Home(){

  let url="http://localhost:3000/blogs/"
    let[blogs,setBlogs]=useState([])
    let[loading,setLoading]=useState(true)

    let getAllBlogs= async() =>{
      let response=await fetch(url)
      let data= await response.json()
      setBlogs(data)
      setLoading(false)
  }


  useEffect(()=>{
    getAllBlogs()
},[])

let deleteBlog = async(id) =>{
  alert("Deleted")
  console.log("Deleting todo with id",id)
  let response= await fetch(url+id,{
      method:"DELETE",
      headers:{
          "Content-Type":"application/json"
      }
  })
  getAllBlogs();
}


    return(
        <div>  
        <title>Admin Dashboard | By Code Info</title>
 
<h1></h1>

<header className="header">
  <div className="logo">
   <Link to={`/DashboardPage1`}><h3>Dashboard</h3></Link>
      <div className="search_box ">
        <input type="text" placeholder="Search Name"/>
        <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
      </div>
    </div> 

    <div className="header-icons">
      <i className="fas fa-bell"></i>
       <div className="account">
        {/* <img src="./Dashboard Html_files/img.jpg" alt=""> */} 
        {/* <h4>Sumanth Mekala </h4> */}
      </div>
    </div>

    </header>
  <div class="container">
    <nav>
      <div className="side_navbar">
        <span>Main Menu</span>
        <a href="#" class="active">Dashboard</a>
        {/* <a href="#">Profile</a>
        <a href="#">History</a>
        <a href="#">Application</a>
        <a href="#">My Account</a>
        <a href="#">Documnets</a> */}

        <div className="links">
          <span>Quick Link</span>
          <a href="#">Settings</a>
          <a href="#">Contact</a>
          <a href="#">Logout</a>
        </div>
      </div>
    </nav>

    <div className="main-body">
      {/* <h2>Dashboard</h2>
      <div className="promo_card">
        <h1>Welcome to Blog Page</h1>
        <span>A place to lot of blogs.</span>
        <button>Learn More</button>
      </div> */}
      <div >
        
        <Link to={`/AddBlogs`}>
        <button className="AddBlogs" type="click">AddBlogs</button>
        </Link>
        
    </div>
    <div className=' p-5 mt-4 flex flex-wrap '>
        {loading?("loading"):(
            blogs.map((blog)=>{
                return(
                    <BLOG blog={blog} key={blog.id} deleteBlog={deleteBlog}/>
                )
            })
        )}
        </div>
</div>
<div>
      {/* <div className="sidebar">
      <h4>Author Name</h4>
      
      <div className="name">

        <div className="info">
          <h5>Robin Sharma</h5>
          <span><i className="fas fa-dollar"></i>25</span>
        </div>
      </div>

      <div className="name">
        
        <div className="info">
          <h5>Absurn</h5>
          <span><i className="fa-solid fa-rupee-sign"></i>30</span>
        </div>
      </div>

      <div className="name">
        
        <div className="info">
          <h5>Pol Chemio</h5>
          <span><i className="fas fa-euro"></i>22</span>
        </div>
      </div>
      </div>  */}
      </div>
      </div>
      </div>
      
    )
}

function BLOG (props){
  let body= props.blog.body
  let summary= props.blog.summary

  return(
      <>
      <div  className=" p-10 mt-4 flex flex-col w-1/2 border border-red-800">
      <img className="h-56 w-64" src={props.blog.image} alt="No Image"/>
      <p>{props.blog.title}</p>

      {/* <div
      dangerouslySetInnerHTML={{__html: body}}
    /> */}
          {props.blog.date}
          {props.blog.likes}


    <div
      dangerouslySetInnerHTML={{__html: summary}}
    />
    <div className="flex space-x-4">
    <button onClick={()=>{
        props.deleteBlog(props.blog.id)
       }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button>
<p className="mt-2">
  <Link to={`/EditBlogs/${props.blog.id}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg></Link>
        </p>

        </div>
       </div>


       
       

      </>
  )
}

