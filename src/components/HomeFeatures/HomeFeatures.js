import React from 'react'
import "./HomeFeatures.css"


function HomeFeatures({item}) {
  return (
    <div className="home-features-container">
        <div className="home-features-address-container">
            <h3>{item?.address?.street}, {item?.address?.city}, {item?.address?.postcode}</h3>
        </div>
        <div className="home-features-grid-container">
            <div className="home-features-grid-item">
                <small>Bedrooms</small>
            </div>
            <div className="home-features-grid-item">
                <small>Bathrooms</small>
            </div>
            <div className="home-features-grid-item">
                <small>Property Type</small>
            </div>
            <div className="home-features-grid-item">
                <small>Price</small>
            </div>
            <div className="home-features-grid-item">
                <small>Furnished type</small>
            </div>
            <div className="home-features-grid-item">
                <small>Available from</small>
            </div>
        </div>
    </div>
  )
}

export default HomeFeatures