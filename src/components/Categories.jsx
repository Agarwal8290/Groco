import "./categories.css"
import Image from "../assets/cat-1.png"
import Image2 from "../assets/cat-2.png"
import Image3 from "../assets/cat-3.png"
import Image4 from "../assets/cat-4.png"

import CategoriesBox from "./CategoriesBox";
import React from 'react'

const Categories = () => {
  return (
    <section className="categories" id="categories">
        <h1 className="heading"> product <span>categories</span></h1>
        <div className="box-container">

            <CategoriesBox imgsrc={Image} Name="vegitables"/>
            <CategoriesBox imgsrc={Image2} Name="fresh fruit"/>
            <CategoriesBox imgsrc={Image3} Name="dairy product"/>
            <CategoriesBox imgsrc={Image4} Name="fresh meat"/>

        </div>


    </section>
  )
}

export default Categories
