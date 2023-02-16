import React from 'react'
import "./Footer.css"
import { AiOutlineCopyrightCircle } from "react-icons/ai";


function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left-container">
        <a href="">About Us</a>
        <a href="">Terms & Conditions</a>
        <a href="">Privacy & Cookie Policies</a>
      </div> 
      <div className="footer-right-container">
        <p>2022</p>
        <div className="footer-right-copyright">
          <AiOutlineCopyrightCircle />
          <p>UniLife</p>
        </div>
      </div> 
    </div>
  )
}

export default Footer