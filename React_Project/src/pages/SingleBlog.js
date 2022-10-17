import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function SingleBlog() {
    let {id}=useParams()
    let url="http://localhost:3000/blogs/"
    let[blogs,setBlogs]=useState({})
    let[loading,setLoading]=useState(true)

    let getAllBlogs= async() =>{
      let response=await fetch(url+id)
      let data= await response.json()
      console.log(data)
      setBlogs(data)
      setLoading(false)
  }


  useEffect(()=>{
    getAllBlogs()
},[])
    
  return (
    <>
    <div className='max-w-6xl mx-auto bg-red-200 flex justify-between py-5 rounded-xl'>
        <div className='text-3xl text-center px-4'><p>{blogs.title}</p></div>
            
    <p className='px-2'>{blogs.date}</p>         

    </div>
    
    {loading?("loading"): 
            
              <>
        <div className='max-w-6xl mx-auto flex bg-red-50 px-10 py-20 mt-3 rounded-md'>
            <div className=' max-w-sm  '><img src={blogs.image} alt="Image"/></div>
            <div className='ml-7 w-full p-10 rounded-lg'>
                <p>
                    <span className='font-bold text-lg text-black '>Content: </span><p className=''><div dangerouslySetInnerHTML={{__html: (blogs.body)}}/><br></br></p>
                    <span className='font-bold text- lg text-black '>Summary: </span><p className=''><div dangerouslySetInnerHTML={{__html: (blogs.summary)}}/><br></br></p>
                </p>
                <div className="flex space-x-4">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ">
                            <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                        </svg>
                    </button>
                    <Link to={`/EditBlogs/${blogs.id}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mt-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                    </Link>

    </div>


        

            </div>
        </div>
              
             
            
              </>
}

   
    
    </>
  )
}

