import React from 'react'
import axios from 'axios';
import "./SeeAllCitiesPage.css"
import CityCard from '../../components/CityCard/CityCard';
import Headline from '../../components/Headline/Headline';


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
      },[]
  )


  return (
    <div>
        <Headline headline="Student Accomodation" subheadline="UniLife have student accommodation available across the UK. Whatever you’re after, we can help you find the right student accommodation for you. "/>
        <div className="see-all-cities-headline">
            <h3>Student accommodations in our top cities</h3>
        </div>
        <div className="see-all-cities-container">
                {
                allCities.map(item => <CityCard
                    key={item._id}
                    city={item}/>)
                }
        </div>
        
    </div>
  )
}


export default SeeAllCitiesPage