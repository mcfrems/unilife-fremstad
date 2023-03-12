import React from 'react'
import "./HomeCard.css"



function HomeCard({homes, imageUrl}) {

  const baseUrl = process.env.REACT_APP_BASE_URL;

    const homeCardStyle={
        height: "450px",
        width: "275px",
        backgroundImage: `url("${homes}${imageUrl}")` ,
        borderRadius: "24px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "1px solid grey",
        margin: "10px",
        position: "relative", //needed to use absolute on other stuff
    }   


  return (
    <div>
        <div style={homeCardStyle}></div>
        {/* <p>{homes.city_id}</p> */}
    </div>
  )
}

export default HomeCard