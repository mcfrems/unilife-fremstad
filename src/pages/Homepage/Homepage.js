import React from 'react'
import "./Homepage.css"
import { AiOutlineHeart, AiOutlineMail } from "react-icons/ai";
import banner from '../../assets/person.png'



function Homepage() {
  return (
    <div className="homepage-container">
        <div className="compare-container">
          <div className="compare-left-container">
              <AiOutlineHeart />
              <h3>Best Selection</h3>
              <p>Best selection of student accommodations. Never been easier to find a home that’s right for you.</p>
              <AiOutlineMail />
              <h3>Your favorite</h3>
              <p>Shortlist your favourite properties and send enquiries in one click.</p>
              <button>Search & Compare</button>
          </div>
          <img src={banner} className="banner"/>
        </div>
    </div>
  )
}

export default Homepage