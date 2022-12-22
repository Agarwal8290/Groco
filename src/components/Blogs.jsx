import "./Blogs.css"

import Image1 from "../assets/blog-1.jpg"
import Image2 from "../assets/blog-1.jpg"
import Image3 from "../assets/blog-1.jpg"

import React from 'react'
import BlogsBox from "./BlogsBox"

const Blogs = () => {
  return (
    <div id='blogs'>
    <section className="blogs" >
        <h1 className="heading"> our <span>blogs</span></h1>
        <div className="box-container">
            <BlogsBox imgsrc={Image1}/>
            <BlogsBox imgsrc={Image2}/>
            <BlogsBox imgsrc={Image3}/>

        </div>

    </section>
    </div>
  )
}

export default Blogs
