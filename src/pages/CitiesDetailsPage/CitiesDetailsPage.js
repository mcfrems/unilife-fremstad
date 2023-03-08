import React from 'react'
import "./CitiesDetailsPage.css"
import Headline from '../../components/Headline/Headline';
import students from '../../assets/students.png'
import Homes from '../../components/Homes/Homes';
import Search from '../../components/Search/Search';




function CitiesDetailsPage() {
  return (
    <div className="cities-details-container">
        <Headline headline="Search Accomodation" subheadline="Whatever you’re after, we can help you find the right student accommodation for you.  "/>
        <Search/>
        <div className="cities-details-body">
                <h3>6 homes in Leeds</h3>
                <Homes />
            <div className="city-details-text-container">
                <div className="city-details-text-container-left">
                  <h3>Being a student in Leeds</h3>
                  <p>Leeds is a lively and multicultural city with a large student population. It is quite a compact city, so it is easy to get around and has a community feel. Leeds is the perfect mix of city and town life and has something to offer to anyone who calls it home. <br/> Leeds is home to three universities, the University of Leeds, Leeds Trinity University and Leeds Beckett University</p>
                </div>
                <img src={students} className="students"/>
            </div>
        </div>
    </div>

  )
}

export default CitiesDetailsPage