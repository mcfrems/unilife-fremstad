import React from 'react'
import "./Homepage.css"
import { AiOutlineHeart, AiOutlineMail } from "react-icons/ai";
import person from '../../assets/person.png'
import Headline from '../../components/Headline/Headline';
import Search from '../../components/Search/Search';
import TopCities from '../../components/TopCities/TopCities';
import bill from '../../assets/bill.png';
import compare from '../../assets/compare.png';
import search from '../../assets/search.png'



function Homepage() {

  return (
    <div>
      <Headline headline="Find student homes with bills included" subheadline="A simple and faster way to search for student accommodation"/>
      <Search />
      <TopCities />
      <button>See All Cities</button>
      <div className="homepage-container">


        <div className="inclusive-homes-container">
                <div className="inclusive-homes-container-headline">
                      <h2>Compare all inclusive student homes.</h2>
                </div>
                <div className="inclusive-homes-container-content">
                      <div className="inclusive-homes-container-search">
                        <img src={search} />
                        <h2>Search</h2>
                        <p>Find your dream home in the perfect area near your university.</p>
                      </div>
                      <div className="inclusive-homes-container-compare">
                        <img src={compare}/>
                        <h2>Compare</h2>
                        <p>Compare student accommodation to find the right home for you.</p>
                      </div>
                      <div className="inclusive-homes-container-bills">
                        <img src={bill}/>
                        <h2>Bills Included</h2>
                        <p>Bills are included in all rent prices. No hidden fees.</p>
                      </div>
                </div>
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