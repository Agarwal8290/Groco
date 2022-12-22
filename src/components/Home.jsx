import "./Home.css";
import {Link} from "react-router-dom"

import React from 'react'

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="content">
        <h3>fresh and <span>organic</span> product for your</h3>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, molestias nobis! Quisquam incidunt eaque alias.
        </p>
        <Link to="/" className="btn">shop now</Link>
      </div>
    </div>
  )
}

export default Home
