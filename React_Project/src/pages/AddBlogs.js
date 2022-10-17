
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toast } from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';

 export default function AddBlogs() {

  let url="http://localhost:3000/blogs/"
    let[blogs,setBlogs]=useState([])
    let[loading,setLoading]=useState(true)
    const [title,setTitle]=useState('')
    const [summary,setSummary]=useState('')
    const [body,setBody]=useState('')
    const [image,setImage]=useState('')
    const [categorys,setCategorys]=useState('')
    let categoryLists=['Sports','News',"Political","Food","Travel"]



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
      toast.success("Added Successfully")
      event.preventDefault()

      let blogToAdd={
        title:title,
        summary:summary,
        date:date,
        category:categorys,
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
    setCategorys('')
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
    <div className=' max-w-4xl mx-auto p-5 rounded-2xl'>
      <div className='font-bold text-center text-3xl py-2 rounded-3xl'>Text Editor</div>
      <div className='bg-red-200 rounded-xl px-10 py-4 '>

      <p className='font-bold'>Title:</p>
        <input className='mt-2' type="text" placeholder='Title' value={title} onChange={(event)=>{
          setTitle(event.target.value)
        }}/>
        <p className='font-bold mt-5'>Image URL:</p>
        <input className='w-full py-1' type="text" placeholder='Image URL Only' value={image} onChange={(event)=>{
          setImage(event.target.value)
        }}/>

        <p className='font-bold mt-5'>Category:</p>
        <select onChange={(event)=>{
                          setCategorys(event.target.value)
                        }}>
        <option >select a Caregory</option>
                {categoryLists.map((categoryList,index)=>{
                    return(
                        <option value={categoryList} key={index} >{categoryList}</option>
                    )
                })}
          </select>

        <p className='font-bold mt-5'>Body:</p>
        <div className='bg-slate-100 '>
  <ReactQuill theme="snow" value={body} onChange={setBody} /></div>
  <p className='font-bold  mt-5'>Summary:</p>
  <div className='bg-slate-100'>
  <ReactQuill theme="snow" value={summary} onChange={setSummary} /> </div>
  <button className='bg-slate-300 font-bold rounded-xl px-3 mt-5' type="submit" onClick={addBlog}  >Add Blog</button>
  </div>

  </div>
   </> 
  )
}


