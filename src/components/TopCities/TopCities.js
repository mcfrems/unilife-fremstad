import React from 'react'
import "./TopCities.css"
import axios from 'axios'
import CityCard from '../CityCard/CityCard';

function TopCities() {
    
    const baseUrl = process.env.REACT_APP_BASE_URL;
    //what is the endpoint
    //Url = ${baseUrl}cities

    //create state to hold top cities
    const [topCities, setTopMovies] = React.useState([])

    React.useEffect(
        ()=>{
            //call the api
            axios.get(`${baseUrl}cities`)
            .then(res =>{
                console.log(res.data.response)
                //store data in state
                setTopMovies(res.data.response.slice(0, 9))
            })
            .catch(err => console.log(err))
        },[]
    )


  return (
    <div>
        <div className="top-cities-headline">
            <h3>Student accommodations in our top cities</h3>
        </div>
        <div className="top-cities-container">
                {
                topCities.map(item => <CityCard 
                    key={item._id}
                    city={item}/>)
                }
        </div>
        
    </div>
  )
}

export default TopCities