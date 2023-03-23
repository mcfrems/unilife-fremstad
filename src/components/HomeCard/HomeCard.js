import React from 'react'
import "./HomeCard.css"
import { Link } from 'react-router-dom';


function HomeCard({homes}) {

    const homeCardStyle={
        height: "400px",
        width: "275px",
        borderRadius: "24px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "1px solid var(--grey)",
        margin: "10px",
        position: "relative", //needed to use absolute on other stuff
    }   


  return (
    <div>
        <div style={homeCardStyle}>
          <img className= "home-card-img" src={homes?.images[0]} alt=""/>

          <div className="rent-container">
            <div className="rent-container-left">
              <h3>{homes?.rent}</h3>
            </div>
            <div className="rent-container-right">
              <p>{homes?.bedroom_count}</p>
              <p>{homes?.bathroom_count}</p>
            </div>
          </div>

          <div className="address-container">
            <div className="address-container-top">
              <p>Detatched</p>
              <p>{homes?.furnished}</p>
            </div>
            <div className="address-container-bottom">
              <p>{homes?.address.street} {homes?.address.city} {homes?.address.postcode}</p>
            </div>
          </div>
          <div className="view-home-container">
            <Link to={`/properties/${homes?._id}`}><p>View Home</p></Link>
          </div>
        </div>
    </div>

  )
}

export default HomeCard