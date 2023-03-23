import React from 'react'
import "./Footer.css"
import { AiOutlineCopyrightCircle } from "react-icons/ai";


function Footer() {
  return (
    <div>
      <div className="upper-footer-container">
        <div className="contact-left">
          <h1>Keep in touch</h1>
          <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
          <p>input here</p>
        </div>
        <div className="contact-right">
          <h1>Let's Socialize</h1>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </div>
      <div className="sub-footer-container">
        <div className="footer-left-container">
          <a href="/">About Us</a>
          <a href="/">Terms & Conditions</a>
          <a href="/">Privacy & Cookie Policies</a>
        </div> 
        <div className="footer-right-container">
          <p>2023</p>
          <div className="footer-right-copyright">
            <AiOutlineCopyrightCircle />
            <p>UniLife</p>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Footer