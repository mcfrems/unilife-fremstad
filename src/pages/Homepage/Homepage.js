import React from 'react'
import "./Homepage.css"
import { AiOutlineHeart, AiOutlineMail } from "react-icons/ai";
import person from '../../assets/person.png'
import Headline from '../../components/Headline/Headline';
import Search from '../../components/Search/Search';


function Homepage() {

  return (
    <div>
      <div>
        <Headline headline="Find student homes with bills included" subheadline="A simple and faster way to search for student accommodation"/>
      </div>
      <Search />
      <div className="homepage-container">
        <div className="inclusive-homes-container">
            
        </div>
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
            <img src={person} className="person"/>
          </div>
      </div>
    </div>
  )
}

export default Homepage