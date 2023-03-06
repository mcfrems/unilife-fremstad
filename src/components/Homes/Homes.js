import React from 'react'
import "./Homes.css"
import HomeCard from '../HomeCard/HomeCard';
import axios from 'axios'



function Homes() {

    const baseUrl = process.env.REACT_APP_BASE_URL;
    //what is the endpoint
    //Url = ${baseUrl}cities

    //create state to hold top cities
    const [homes, setHomes] = React.useState([])

    React.useEffect(
        ()=>{
            //call the api
            axios.get(`${baseUrl}cities`)
            .then(res =>{
                console.log(res.data.response)
                //store data in state
                setHomes(res.data.response)
            })
            .catch(err => console.log(err))
        },[]
    )



  return (
    <div className="homes-container">
        <HomeCard />
        {/* {
        topCities.map(item => <HomeCard
            key={item._id}
            city={item}/>)
        } */}
    </div>
  )
}

export default Homes