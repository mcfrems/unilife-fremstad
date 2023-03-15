import React from 'react'
import "./HomeDetailsGrid.css"
import axios from 'axios'
import {useParams} from 'react-router-dom'
import HomeFeatures from '../HomeFeatures/HomeFeatures';
// import HomeDetailsImages from '../HomeDetailsImages/HomeDetailsImages';


function HomeDetailsGrid() {

    const baseUrl = process.env.REACT_APP_BASE_URL;

    const {propertyId} = useParams();

    // //what is the endpoint
    // //Url = ${baseUrl}properties/${propertyId}

    //create state to hold top cities
    const [homeDetails, setHomeDetails] = React.useState([])
    // const [homeDetailsImages, setHomeDetailsImages] = React.useState([])

    React.useEffect(
        ()=>{
            //call the api
            axios.get(`${baseUrl}properties/${propertyId}`)
            .then(res =>{
               // console.log(res.data)
                //store data in state
                setHomeDetails(res.data)
                // setHomeDetailsImages(res.data.images)
            })
            .catch(err => console.log(err))
        },[]
    )

    const test = () => {
      console.log("property id is ", propertyId)
    }

  return (
    <div className="grid-container">

          <div className="grid-item">
            <small>Back to Search</small>
            <div className="large-image-container">
                <img src={homeDetails?.images?.[0]} />
            </div>
            <div className="small-image-container">
                <img src={homeDetails?.images?.[1]} />
                <img src={homeDetails?.images?.[2]} />
                <img src={homeDetails?.images?.[3]} />
            </div>
        {/* {
            homeDetailsImages.map(item => 
             <HomeDetailsImages image={item} />)
            } */}
          </div>

          <div className="grid-item">
            <HomeFeatures />
          </div>

          <div className="grid-item">
            <h3>Description</h3>
            <p>{homeDetails?.property_description}</p>
          </div>

          <div className="grid-item">
            <h3>Bedroom Prices</h3>
          </div>

          <div className="grid-item">
            <h3>Key Features</h3>
            <p>{homeDetails?.key_features?.[0]}</p>
            <p>{homeDetails?.key_features?.[1]}</p>
            <p>{homeDetails?.key_features?.[2]}</p>
            <p>{homeDetails?.key_features?.[3]}</p>
            <p>{homeDetails?.key_features?.[4]}</p>
          </div>

    </div>
  )
}

export default HomeDetailsGrid