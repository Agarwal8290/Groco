import "./Footer.css"
import { Link } from "react-router-dom"
import React from 'react'
import Image from "../assets/payment.png"

const Footer = () => {
  return (
    <section className="footer">
        <div className="box-container">
            <div className="box2">
                <h3> groco <i className="fas fa-shopping-basket"></i></h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, molestias.</p>
                <div className="share">
                    <Link className="fa-brands fa-facebook"></Link>
                    <Link className="fab fa-twitter"></Link>
                    <Link className="fab fa-instagram"></Link>
                    <Link className="fab fa-linkedin"></Link>

                </div>
            </div>

            <div className="box2">
                <h3> contact info</h3>
                <Link className="links"><i className="fas fa-phone"></i>+123-456-7890</Link>
                <Link className="links"><i className="fas fa-phone"></i>+111-222-3333</Link>
                <Link className="links"><i className="fas fa-envelope"></i>niteshagarwal8290@gmail.com</Link>
                <Link className="links"><i className="fas fa-map-marker-alt"></i>Jaipur, rajasthan - 303603</Link>

            </div>

            <div className="box2">
               <h3>quick links</h3>
               <Link className="links"><i className="fas fa-arrow-right"></i> home </Link>
               <Link className="links"><i className="fas fa-arrow-right"></i> feature </Link>
               <Link className="links"><i className="fas fa-arrow-right"></i> product </Link>
               <Link className="links"><i className="fas fa-arrow-right"></i> categories </Link>
               <Link className="links"><i className="fas fa-arrow-right"></i> review </Link>
               <Link className="links"><i className="fas fa-arrow-right"></i> blogs </Link>

            </div>

            <div className="box2">
               <h3>news letter</h3>
             <p>subscribe for latest update</p>
             <input type="email" placeholder="your email" className="email" />
             <input type="submit" value="subscribe" class="btn" />
             <img src={Image} alt="" />

            </div>

        </div>

        <div className="credit"> created by <span> Nitesh Agarwal </span> | all rights reserved</div>

    </section>
  )
}

export default Footer
