import React from 'react'
import "./CityCard.css"

function CityCard({city}) {

    const imageStyle={
        height: "300px",
        width: "400px",
        backgroundImage: `url("${city?.image_url}")`,
        borderRadius: "24px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative", //needed to use absolute on other stuff
    }   

  return (
    <div style={imageStyle}>
        <p>{city.name}</p>
    </div>
  )
}

export default CityCard