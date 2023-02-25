import React from 'react'
import "./Headline.css"
import banner from '../../assets/cover-img.png'

function Headline(props) {
    
  return (
    <div>
        <div className="banner-container">
        <img src={banner} className="banner"/>
            <div className="text-container"> 
                <h1>{props.headline}</h1>
                <p>{props.subheadline}</p>
            </div>
        </div>
  </div>
  )
}

export default Headline