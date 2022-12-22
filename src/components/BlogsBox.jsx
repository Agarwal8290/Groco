import React from 'react'
import {Link} from "react-router-dom" 
const BlogsBox = (props) => {
  return (
    <div className="box1">
                <img src={props.imgsrc} alt="" />
                <div className="content">
                    <div className="icons">
                        <Link><i className='fas fa-user'></i> by user</Link>
                        <Link><i className='fas fa-calendar'></i> 1st may, 2021</Link>
                    </div>
                    <h3>fresh and organic vegitables and fruits</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, sint?</p>
                    <Link className="btn">read more</Link>
                </div>
            </div>
  )
}

export default BlogsBox
