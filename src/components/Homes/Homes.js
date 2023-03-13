import React from 'react'
import "./Homes.css"
import HomeCard from '../HomeCard/HomeCard';
import axios from 'axios'
import {useParams} from 'react-router-dom'


function Homes() {

    const baseUrl = process.env.REACT_APP_BASE_URL;

    const {cityId} = useParams();

    // //what is the endpoint
    // //Url = ${baseUrl}properties

    // gives me specific property details
    // ${baseUrl}properties/city/${cityId}

    //create state to hold top cities
    const [homes, setHomes] = React.useState([])

    React.useEffect(
        ()=>{
            //call the api
            axios.get(`${baseUrl}properties/city/${cityId}`)
            .then(res =>{
                //console.log(res.data.response)
                //store data in state
                setHomes(res.data.response)
                console.log(res.data.response)
            })
            .catch(err => console.log(err))
        },[]
    )

  return (
    <div className="homes-container">
        {
        homes.map(item => 
             <HomeCard key={item?._id} homes={item} />)
        }
    </div>
  )
}

export default Homes