import React from 'react'
import "./CitiesDetailsPage.css"
import Headline from '../../components/Headline/Headline';



function CitiesDetailsPage() {
  return (
    <div className="cities-details-container">
        <Headline headline="Search Accomodation" subheadline="Whatever you’re after, we can help you find the right student accommodation for you.  "/>
        <div className="cities-details-headline">
            <h3>6 homes in Leeds</h3>
        </div>
    </div>
  )
}

export default CitiesDetailsPage