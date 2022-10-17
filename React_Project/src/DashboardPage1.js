import React from "react"
import { useState, useEffect } from "react"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"
export default function Home() {

  let url = "http://localhost:3000/blogs/"
  let [blogs, setBlogs] = useState([])
  let [loading, setLoading] = useState(true)
  const [categorys, setCategorys] = useState('')
  let categoryLists = ['Sports', 'News', "Political", "Food", "Travel"]

  let [select, setSelect] = useState(false)


  let getAllBlogs = async () => {
    let response = await fetch(url)
    let data = await response.json()
    setBlogs(data)
    setLoading(false)
  }


  useEffect(() => {
    getAllBlogs()
  }, [])

  let deleteBlog = async (id) => {
    console.log("Deleting todo with id", id)
    let response = await fetch(url + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    toast.success("Deleted Successfully")
    getAllBlogs();
  }








  return (
    <div>
      <title>Admin Dashboard | By Code Info</title>

      <h1></h1>
      <header>
        <div className=' flex justify-center'>
          <center className=' w-full text text-4xl p-4 rounded-md font-style: italic bg-gradient-to-r from-red-100 to to-pink-100 '>
            MY BLOG PAGE
          </center>
          <div >
            <select className="bg-slate-600 py-3 px-3 rounded-xl" onChange={(event) => {
              setCategorys(event.target.value)
            }}>
              <option >select a payment</option>
              {categoryLists.map((categoryList, index) => {
                return (
                  <option value={categoryList} key={index} >{categoryList}</option>
                )
              })}
            </select>
          </div>

        </div>
      </header>


      <div class="container">
        <nav className="mt-5">
          <div className="side_navbar">
            <span>Main Menu</span>
            <div className="AddBlogs" >

              <Link to={`/AddBlogs`}>
                AddBlogs
              </Link>

            </div>
            <Link to={`/DashboardPage1`}>Dashboard</Link>



          </div>
        </nav>

        <div className="main-body">



          <div className='max-h-screen '>
            {loading ? ("loading") : (
              blogs.map((blog) => {
                return (
                  <BLOG blog={blog} key={blog.id} deleteBlog={deleteBlog} />
                )
              })
            )}
          </div>




        </div>
        <div>
        </div>
      </div>
    </div>

  )
}

function BLOG(props) {
  let summary = props.blog.summary

  return (
    <>
      <div className=" border-solid border-red-900 mt-2 p-10 flex justify_content:space-between  hover:bg-pink-50 border-2 ">
        <div className="flex flex-col  ">
          <Link to={`/SingleBlog/${props.blog.id}`}>
            {(props.blog.image) ? (<img className="h-64 w-80" src={props.blog.image} alt=" image" />) :
              (<img className="h-64 w-80" src="https://www.nvdevices.com/wp-content/uploads/2021/03/no-image-480x480.jpg" alt="image" />)}

          </Link>
        </div>
        <div className="ml-5 flex flex-col justify-between">
          <div className="max-w-xl">
            <i className="font-bold">{props.blog.title}</i>

            <p className="font-bold mt-5">Summary:</p>
            <div dangerouslySetInnerHTML={{ __html: summary }} />
          </div>
          <div className=" flex justify-between">
            <div className="flex space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mt-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
              </svg>
              <button onClick={() => {
                props.deleteBlog(props.blog.id)
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </button>
              <p className="mt-3">
                <Link to={`/EditBlogs/${props.blog.id}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                </Link>
              </p>
            </div>
            {props.blog.date}
          </div>

        </div>
        <div>
        </div>



      </div>

    </>
  )
}

