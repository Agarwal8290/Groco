import { Link } from "react-router-dom";

import React from 'react'

const productbox = (props) => {
  return (
    <div className="box4">
                    <img src={props.imgsrc} alt="" />
                    <h3>{props.Title}</h3>
                    <div className="price">$4.99 - 10.99/-</div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <Link className="btn">add to cart</Link>
                </div>
  )
}

export default productbox
