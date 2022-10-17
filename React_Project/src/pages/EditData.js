import React, { useState, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams } from 'react-router-dom';


export default function EditData() {

  let { id } = useParams();

  let editor = useRef(null)
  let url = "http://localhost:3000/blogs/"
  let [blogs, setBlogs] = useState([])
  let [loading, setLoading] = useState(true)

  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [body, setBody] = useState('')
  const [image, setImage] = useState('')
  const [categorys, setCategorys] = useState('')
  let categoryLists = ['Sports', 'News', "Political", "Food", "Travel"]

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1
    }/${current.getFullYear()}`;

  const navigate = useNavigate()

  //   let getAllBlogs= async() =>{
  //     let response=await fetch(url)
  //     let data= await response.json()
  //     setBlogs(data)
  //     setLoading(false)
  // }
  let urlId = "http://localhost:3000/blogs/"

  let InputField = async () => {
    let response = await fetch(urlId + id)
    let data = await response.json()
    setTitle(data.title)
    setBody(data.body)
    setSummary(data.summary)
    setImage(data.image)
    setCategorys(data.categorys)

  }


  let EditBlog = async (event) => {
    event.preventDefault()
    toast.success("Successfully Updated")


    console.log("Editing Blog with id", id)
    let response = await fetch(url + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "title": title,
        "body": body,
        "summary": summary,
        "category": categorys,
        "image": image,
        "date": date
      })
    })

    let d = await response.json()
    console.log(d)

    navigate('/DashboardPage1')
  }



  useEffect(() => {
    InputField()
  }, [])

  return (
    <>

      {/* <div className='max-w-4xl mx-auto p-10 bg-red-200 rounded-2xl'>
<div className=' text-center text-3xl py-3'>Text Editor</div>
<p>Title:</p>
  <input className='w-full' type="text" placeholder='Title' value={title} onChange={(event)=>{
    setTitle(event.target.value)
  }}/>
  <p>Image URL:</p>
  <input className='w-full' type="text" placeholder='Image URL Only' value={image} onChange={(event)=>{
    setImage(event.target.value)
  }}/>
  <p>Category:</p>
  <select className='mt-3' value={categorys} onChange={(event)=>{
                          setCategorys(event.target.value)
                        }}>
        <option >select a Category</option>
                {categoryLists.map((categoryList,index)=>{
                    return(
                        <option value={categoryList} key={index} >{categoryList}</option>
                    )
                })}
          </select>
  <p>Body:</p>
  <div className='bg-slate-100'>
<ReactQuill theme="snow" ref={editor} value={body} onChange={setBody} /></div>
<p >Summary:</p>
<div className='bg-slate-100'>
<ReactQuill theme="snow" ref={editor} value={summary} onChange={setSummary} /> </div>
<button className='bg-slate-300 rounded-xl px-3' type="submit" onClick={EditBlog}  >Submit</button>

</div> */}

      <div className=' max-w-4xl mx-auto p-5 rounded-2xl'>
        <div className='font-bold text-center text-3xl py-2 rounded-3xl'>Text Editor</div>
        <div className='bg-red-200 rounded-xl px-10 py-4 '>

          <p className='font-bold'>Title:</p>
          <input className='mt-2' type="text" placeholder='Title' value={title} onChange={(event) => {
            setTitle(event.target.value)
          }} />
          <p className='font-bold mt-5'>Image URL:</p>
          <input className='w-full py-1' type="text" placeholder='Image URL Only' value={image} onChange={(event) => {
            setImage(event.target.value)
          }} />

          <p className='font-bold mt-5'>Category:</p>
          <select onChange={(event) => {
            setCategorys(event.target.value)
          }}>
            <option >select a Category</option>
            {categoryLists.map((categoryList, index) => {
              return (
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
          <button className='bg-slate-300 font-bold rounded-xl px-3 mt-5' type="submit" onClick={EditBlog}  >Edit Blog</button>
        </div>

      </div>


    </>
  )
}