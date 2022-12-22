import "./Header.css";
import {Link} from "react-scroll"
import React, { useState } from 'react';
import image1 from "../assets/cart-img-1.png";
import image2 from "../assets/cart-img-2.png";
import image3 from "../assets/cart-img-3.png";



const Header = () => {

    const[click , setClick] = useState(false);
    const[click1 , setClick1] = useState(false);
    const[click2 , setClick2] = useState(false)
    const[click3 , setClick3] = useState(false)
 
    const searchClick = () =>{
        setClick(!click);
        setClick1(false);
        setClick2(false);
        setClick3(false);
    }

    const cartClick = () =>{
        setClick1(!click1);
        setClick(false);
        setClick2(false);
        setClick3(false);
    }

    const logClick = () =>{
        setClick2(!click2);
        setClick1(false);
        setClick(false);
        setClick3(false);
    }

    const menuClick = () =>{
        setClick3(!click3);
        setClick1(false);
        setClick2(false);
        setClick(false);
    }

    const change = () =>{
        setClick(false);
        setClick1(false);
        setClick2(false);
        setClick3(false);
    }

    window.addEventListener('scroll' , change);


  return (
    <div className="header">
        <Link to = "home"  className="logo" spy={true} smooth={true} offset={-100} duration={500}
         ><i className="fas fa-shopping-basket"> </i>
         groco
        </Link>
        <div className={click3 ? "navbar active" : "navbar"}>
            <Link to='home' spy={true} smooth={true} offset={-100} duration={500}>home</Link>
            <Link to='features' spy={true}  smooth={true} offset={-80} duration={500}>features</Link>
            <Link to="products" spy={true} smooth={true} offset={-60} duration={500}>products</Link>
            <Link to="categories" spy={true} smooth={true} offset={-60} duration={500}>categories</Link>
            <Link to="review" spy={true} smooth={true} offset={-60} duration={500}>review</Link>
            <Link to="blogs" spy={true} smooth={true} offset={-60} duration={500}>blogs</Link>
        </div>

        <div className="icons">
            <div className="fas fa-bars" id="menu-btn" 
            onClick={menuClick}></div>
            <div className="fas fa-search" id="search-btn" onClick={searchClick}></div>
            <div className="fas fa-shopping-cart" id="cart-btn" onClick={cartClick}></div>
            <div className="fas fa-users" id="login-btn"
             onClick={logClick}></div>

        </div>

        <form action="" className={click ? "search-form active" : "search-form"}>
            <input type="search" id="search-box" placeholder="search here..."/>
            <label htmlFor="search-box" className="fas fa-search"></label>
        </form>

        <div className= {click1 ? "shopping-cart active" : "shopping-cart"}>
            <div className="box">
                <i className="fas fa-trash"></i>
                <img src={image1}alt="" />
                <div className="contant">
                    <h3>watermelon</h3>
                    <span className="price">$4.99/-</span>
                    <span className="quantity">qty : 1</span>
                </div>
            </div>

            <div className="box">
                <i className="fas fa-trash"></i>
                <img src={image2}alt="" />
                <div className="contant">
                    <h3>onion</h3>
                    <span className="price">$4.99/-</span>
                    <span className="quantity">qty : 1</span>
                </div>
            </div>

            <div className="box">
                <i className="fas fa-trash"></i>
                <img src={image3}alt="" />
                <div className="contant">
                    <h3>chicken</h3>
                    <span className="price">$4.99/-</span>
                    <span className="quantity">qty : 1</span>
                </div>
            </div>

            <div className="total">total : $19.69/-</div>
            <Link to="/" className="btn">checkout</Link>
        </div>

        <form action="" className= {click2 ? "login-form active" : "login-form" }>
            <h3>Login now</h3>
            <input type="email" placeholder="your email" className="box" />
            <input type="password" placeholder="your password" className="box" />
            <p>forget your password <Link to="/">click here</Link> </p>
            <p>don't have an account <Link to="/">create now</Link> </p>
            <input type="submit" value="Login now" className="btn" />
        </form>
      
    </div>
  )
}

export default Header
