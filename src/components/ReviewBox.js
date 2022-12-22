import React from 'react'

const ReviewBox = (props) => {
  return (
    <div className="box5">
                <img src={props.imgsrc} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure vel doloremque dolore dicta dolorem magni tenetur nobis ut distinctio modi.</p>
                <h3>{props.Name}</h3>
                <div className="stars">
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star-half-alt'></i>
                    </div>
    </div>
  )
}

export default ReviewBox
