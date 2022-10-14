import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function HomePage() {
    let url="http://localhost:3000/blogs"
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
  return (
    <div>
        <div className=' p-5 mt-4 flex flex-wrap '>
        {loading?("loading"):(
            blogs.map((blog)=>{
                return(
                    <BLOG blog={blog} key={blog.id} />
                )
            })
        )}
        </div>
    </div>
  )
}

function BLOG (props){
   
  
    return(
        <>
        <div  className=" p-10 mt-4 flex flex-col w-1/3 border border-red-800">
            <img src={props.blog.image} alt="no Image"/>
            
        <p>{props.blog.title}</p>
        {props.blog.date}
        </div>
        
  
        </>
    )
  }
