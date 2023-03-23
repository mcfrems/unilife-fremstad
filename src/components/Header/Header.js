import React from 'react'
import "./Header.css"
import { AiOutlineHeart, AiOutlineMail } from "react-icons/ai";
import { ReactComponent as Logo} from "../../assets/logo.svg";


function Header() {
  return (
    <div className="header-container">
        <div className="logo-container">
            <Logo />
            <a href="/" className="logo">UniLife</a>
        </div>
        <div className="header-buttons-container">
            <div className="shortlist-container">
                <AiOutlineHeart />
                <a href="/">Shortlist</a>
            </div>
            <div className="contact-container">
                <AiOutlineMail />
                <a href="/">Contact Us</a>
            </div>
        </div>
    </div>
  )
}

export default Header