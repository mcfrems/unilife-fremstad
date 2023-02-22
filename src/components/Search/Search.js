import React from 'react'
import "./Search.css"


function Search() {
  return (
    <div className="container">
        <div className="search-container">
            <select className="select-city" name="city" id="city">
                <option value="leeds">Leeds</option>
                <option value="newcastle">Newcastle</option>
                <option value="sheffield">Sheffield</option>
                <option value="southampton">Southampton</option>
                <option value="leicester">Leicester</option>
                <option value="brighton">Brighton</option>
                <option value="portsmouth">Portsmouth</option>
                <option value="norwich">Norwich</option>
                <option value="swansea">Swansea</option>
            </select>
            <select className="select-bedroom" name="bedroom" id="bedroom">
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three +">Three +</option>
            </select>
            <button>Find Homes</button>
        </div>
    </div>
  )
}

export default Search