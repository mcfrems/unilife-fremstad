import React from 'react'
import "./CitiesDetailsPage.css"
import Headline from '../../components/Headline/Headline';
import students from '../../assets/students.png'
import Homes from '../../components/Homes/Homes';
import Search from '../../components/Search/Search';
import {useParams} from 'react-router-dom'
import axios from 'axios';

function CitiesDetailsPage() {

  const baseUrl = process.env.REACT_APP_BASE_URL;

  //need to show specific city 

  const {cityId} = useParams();

  //create state for text container
  const [cityText, setCityText] = React.useState()

  // gives me text container details
  // ${baseUrl}cities/633a96876893d471a68cc887
  // ${baseUrl}cities/${cityId}

  // gives me specific property details
  // ${baseUrl}properties/city/${cityId}


  React.useEffect(
    ()=>{
      axios.get(`${baseUrl}cities/${cityId}`)
      .then(res => {
          console.log(res.data.data[0])
          setCityText(res.data.data[0])
      })
      .catch(err => console.log(err))
    }, []
  )

  return (
    <div className="cities-details-container">
        <Headline headline="Search Accomodation" subheadline="Whatever you’re after, we can help you find the right student accommodation for you.  "/>
        <Search/>

        <div className="cities-details-cards">
                <h3>6 homes in {cityText?.name}</h3>
                {/* <Homes /> */}
            <div className="city-details-text-container">
                <div className="city-details-text-container-left">
                  <h3>Being a student in {cityText?.name}</h3>
                  <p> {cityText?.universities} <br/> {cityText?.student_life} </p>
                </div>
                <img src={students} className="students"/>
            </div>
        </div>


    </div>

  )
}

export default CitiesDetailsPage