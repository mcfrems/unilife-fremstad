import React from 'react'
import "./HomeCard.css"

function HomeCard({home}) {

    const imageStyle={
        height: "300px",
        width: "400px",
        // backgroundImage: `url("${city?.image_url}")`,
        borderRadius: "24px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative", //needed to use absolute on other stuff
    }   


  return (
    <div>
        <p>{home.city_id}</p>
    </div>
  )
}

export default HomeCard