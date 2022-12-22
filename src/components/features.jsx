import "./features.css";
import Image from "../assets/feature-img-1.png";
import Image1 from "../assets/feature-img-2.png";
import Image2 from "../assets/feature-img-3.png";

import { Link } from "react-router-dom";

import React from 'react'

const features = () => {
  return (
    <div className="features" id='features'>
        
        <h1 className="heading"> our <span>features</span></h1>
        <div className="box-container">
            <div className="box">
                <img src={Image}alt="" />
                <h3>fresh and organic</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, praesentium?</p>
                <Link to="#" className="btn">read more</Link>
            </div>
            <div className="box">
                <img src={Image1}alt="" />
                <h3>free delivary</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, praesentium?</p>
                <Link to="#" className="btn">read more</Link>
            </div>
            <div className="box">
                <img src={Image2}alt="" />
                <h3>easy payment</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, praesentium?</p>
                <Link to="#" className="btn">read more</Link>
            </div>
        </div>
        </div>

  )
}

export default features
