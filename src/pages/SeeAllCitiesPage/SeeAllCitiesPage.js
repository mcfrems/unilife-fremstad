import React from 'react'
import axios from 'axios';
import "./SeeAllCitiesPage.css"
import Headline from '../../components/Headline/Headline';
import {Link} from 'react-router-dom'


function SeeAllCitiesPage() {

  const baseUrl = process.env.REACT_APP_BASE_URL;
  //what is the endpoint
  //Url = ${baseUrl}cities

  //create state to hold top cities
  const [allCities, setAllCities] = React.useState([])
//   const [currentPage, setCurrentPage] = React.useState([])


  React.useEffect(
      ()=>{
          //call the api
          axios.get(`${baseUrl}cities?limit=20`)
          .then(res =>{
            // console.log(res.data.currentPage)
            console.log(res.data.response)
              //store data in state
            setAllCities(res.data.response)
            //   setCurrentPage(res.data.currentPage)
          })
          .catch(err => console.log(err))
          //eslint-disable-next-line
      }, []
  )


  return (
    <div>
        <Headline headline="Student Accomodation" subheadline="UniLife have student accommodation available across the UK. Whatever you’re after, we can help you find the right student accommodation for you. "/>
        <div className="see-all-cities-headline">
            <h3>Search by city</h3>
        </div>
        <div className="see-all-cities-container">
                {
                allCities.map(item => <Link to ={`/cities/${item?._id}`}> 
                <button className="all-cities-btn">
                {item.name}</button> 
                </Link>)
                }
        </div>

        
    </div>
  )
}


export default SeeAllCitiesPage