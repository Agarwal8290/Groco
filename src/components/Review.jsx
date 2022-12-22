import './Review.css'
import Image1 from "../assets/pic-1.png"
import Image2 from "../assets/pic-2.png"
import Image3 from "../assets/pic-3.png"
import Image4 from "../assets/pic-4.png"
import {  Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import React from 'react'
import ReviewBox from './ReviewBox'

const Review = () => {
  return (
    <section className='review' id='review'>
        <h1 className='heading'> customer's <span>review</span></h1>
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
       className="review-slider"
     >
            <div className='wrapper'>
           <SwiperSlide> <ReviewBox imgsrc = {Image1} Name= "John deo"/>  </SwiperSlide>
            <SwiperSlide>  <ReviewBox imgsrc = {Image2} Name= "John deo"/> </SwiperSlide>
             <SwiperSlide> <ReviewBox imgsrc = {Image3} Name= "John deo"/></SwiperSlide>
             <SwiperSlide> <ReviewBox imgsrc = {Image4} Name= "John deo"/></SwiperSlide>

            </div>
        </Swiper>

    </section>
  )
}

export default Review
