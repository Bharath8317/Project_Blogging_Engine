import React from 'react'
import { Link } from 'react-router-dom'

import AddBlogs from './AddBlogs'

export default function DashboardPage() {
  return (
    <div>
        DashboardPage
        <Link to={`/AddBlogs`}>
        <button type="click">AddBlogs</button>
        </Link>
        
    </div>
  )
}


