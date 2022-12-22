import React from 'react'
import { Link } from "react-router-dom";

const CategoriesBox = (props) => {
  return (
    <div className="box3">
                <img src={props.imgsrc} alt="" />
                <h3>{props.Name}</h3> 
                <p>upto 45% off</p>             
                <Link className="btn">shop now</Link>
    </div>
  )
}

export default CategoriesBox
