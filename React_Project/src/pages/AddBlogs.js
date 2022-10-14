
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate, useNavigate } from 'react-router-dom';

 export default function AddBlogs() {

  let url="http://localhost:3000/blogs/"
    let[blogs,setBlogs]=useState([])
    let[loading,setLoading]=useState(true)
    const [title,setTitle]=useState('')
    const [summary,setSummary]=useState('')
    const [body,setBody]=useState('')
    const [image,setImage]=useState('')


    const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() +1
  }/${current.getFullYear()}`;
  const navigate=useNavigate()


    

    let getAllBlogs= async() =>{
        let response=await fetch(url)
        let data= await response.json()
        setBlogs(data)
        setLoading(false)
    }


    let addBlog=async (event)=>{
        // console.log("Adding new BLOG",value);
        alert("Adde")
        event.preventDefault()

      let blogToAdd={
        title:title,
        summary:summary,
        date:date,
        likes:0,
        body:body,
        image:image
    }
      let response= fetch(url,{
        method:"POST",
        body:JSON.stringify(blogToAdd),
        headers:{
            "Content-Type":"application/json"
        }
    })

    // let data= await response.fetch()
    // console.log(data)
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

    // function returnValue(){
    //   <p>{value}</p>
    //     console.log(value)
    // }


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
  <button className='bg-slate-300 rounded-xl px-3' type="submit" onClick={addBlog}  >Submit</button>

  </div>
   </> 
  )
}


