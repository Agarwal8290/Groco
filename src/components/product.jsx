import "./product.css";
import Productbox from "./productbox";
import productImage from "../assets/product-1.png"
import productImage1 from "../assets/product-2.png"
import productImage2 from "../assets/product-3.png"
import productImage3 from "../assets/product-4.png"
import productImage4 from "../assets/product-5.png"
import productImage5 from "../assets/product-6.png"
import productImage6 from "../assets/product-7.png"
import productImage7 from "../assets/product-8.png"
import "swiper/css";
import "swiper/css/pagination";

import {  Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react'

const product = () => {
  return (


    


    <section className="products" id="products">
          <h1 className="heading"> our <span>products</span></h1>

          <Swiper
       loop = {true}
       spaceBetween={20}
       
       autoplay={{
       
         delay: 5500,
         disableOnInteraction: false,
         
       }}

       centeredSlides = {true}

       breakpoints={{
         0: {
           slidesPerView: 1,
         
         },
         768: {
           slidesPerView: 2,
         
         },
         1020: {
           slidesPerView: 3,
    
         },
       }}
       modules={[Autoplay]}
       className="product-slider"
     >
            <div className="wrapper">
                

            <SwiperSlide>  <Productbox imgsrc={productImage} Title="fresh orange" /> </SwiperSlide>
            <SwiperSlide>  <Productbox imgsrc={productImage1} Title="onion" /> </SwiperSlide>
            <SwiperSlide> <Productbox imgsrc={productImage2} Title="fresh meat" /> </SwiperSlide>
            <SwiperSlide>   <Productbox imgsrc={productImage3} Title="fresh cabbage" /></SwiperSlide>


               
            </div>
          
     </Swiper>
     
            <Swiper
       loop = {true}
       spaceBetween={20}
       
       autoplay={{
       
         delay: 5500,
         disableOnInteraction: false,
         
       }}

       centeredSlides = {true}

       breakpoints={{
         0: {
           slidesPerView: 1,
         
         },
         768: {
           slidesPerView: 2,
         
         },
         1020: {
           slidesPerView: 3,
    
         },
       }}
       modules={[Autoplay]}
       className="product-slider"
     >
            <div className="wrapper">
            <SwiperSlide>    <Productbox imgsrc={productImage4} Title="fresh potato" /> </SwiperSlide>
            <SwiperSlide>   <Productbox imgsrc={productImage5} Title="fresh avocado" /> </SwiperSlide>
            <SwiperSlide>   <Productbox imgsrc={productImage6} Title="fresh carrot" /></SwiperSlide> 
            <SwiperSlide>   <Productbox imgsrc={productImage7} Title="green lamon" /></SwiperSlide>


               
            </div>
          
          </Swiper>
    </section>
    
  )
}

export default product

