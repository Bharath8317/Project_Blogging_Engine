import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {  useNavigate } from 'react-router-dom';


export default function EditData() {
  let url="http://localhost:3000/blogs/"
    let[blogs,setBlogs]=useState([])
    let[loading,setLoading]=useState(true)

    const [title,setTitle]=useState('')
    const [summary,setSummary]=useState('')
    const [body,setBody]=useState('')
    const [image,setImage]=useState('')
    const navigate=useNavigate()



    let getAllBlogs= async() =>{
      let response=await fetch(url)
      let data= await response.json()
      setBlogs(data)
      setLoading(false)
  }

  let EditBlog = async(id) =>{
    alert("Edited")
    console.log("Deleting todo with id",id)
    let response= await fetch(url+id,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        }
    })
    setTitle("")
    setSummary("")
    setBody("")
    setImage("")
    getAllBlogs();
    navigate('/DashboardPage1')
  }

  useEffect(()=>{
    getAllBlogs()
  },[])

  return(
    <>
    

<div className='max-w-4xl mx-auto p-10 bg-cyan-500 rounded-2xl'>
<div className='bg-zinc-500 text-center text-3xl py-3'>Text Editor</div>
<p>Title:</p>
  <input className='w-full' type="text" placeholder='Title' value={title} onChange={(event)=>{
    setTitle(event.target.value)
  }}/>
  <p>Image URL:</p>
  <input className='w-full' type="text" placeholder='Image URL Only' value={image} onChange={(event)=>{
    setImage(event.target.value)
  }}/>
  <p>Body:</p>
  <div className='bg-slate-100'>
<ReactQuill theme="snow" value={body} onChange={setBody} /></div>
<p >Summary:</p>
<div className='bg-slate-100'>
<ReactQuill theme="snow" value={summary} onChange={setSummary} /> </div>
<button className='bg-slate-300 rounded-xl px-3' type="submit" onClick={EditBlog}  >Submit</button>

</div>

    
   </> 
  )
}