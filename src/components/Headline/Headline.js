import React from 'react'
import "./Headline.css"
import banner from '../../assets/cover-img.png'

function Headline({headline, subheadline}) {

  const bannerStyle={
    height: "60vh",
    width: "100%",
    backgroundImage: `url("${banner}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative", //needed to use absolute on other stuff
}   
    
  return (
      <div className="banner-container" style={bannerStyle}>
        <div className="banner-overlay"></div>
        <div className="text-container"> 
            <h1>{headline}</h1>
            <p>{subheadline}</p>
        </div>
      </div>
  )
}

export default Headline