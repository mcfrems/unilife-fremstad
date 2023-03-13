import React from 'react'
import "./HomeDetailsGrid.css"
import axios from 'axios'
import {useParams} from 'react-router-dom'


function HomeDetailsGrid() {

    const baseUrl = process.env.REACT_APP_BASE_URL;

    const {propertyId} = useParams();

    // //what is the endpoint
    // //Url = ${baseUrl}properties/${propertyId}

    //create state to hold top cities
    const [homeDetails, setHomeDetails] = React.useState([])

    React.useEffect(
        ()=>{
            //call the api
            axios.get(`${baseUrl}properties/${propertyId}`)
            .then(res =>{
                console.log(res)
                //store data in state
            })
            .catch(err => console.log(err))
        },[]
    )

  return (
    <div className="grid-container">

          <div className="grid-item">1
          </div>

          <div className="grid-item">2
          </div>

          <div className="grid-item">
            <h3>Description</h3>
          </div>

          <div className="grid-item">
            <h3>Bedroom Prices</h3>
          </div>

          <div className="grid-item">
            <h3>Key Features</h3>
          </div>

    </div>
  )
}

export default HomeDetailsGrid