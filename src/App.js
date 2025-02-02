import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage/Homepage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SeeAllCitiesPage from './pages/SeeAllCitiesPage/SeeAllCitiesPage';
import CitiesDetailsPage from './pages/CitiesDetailsPage/CitiesDetailsPage';
import HomeDetailsPage from './pages/HomeDetailsPage/HomeDetailsPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Header />
        <Routes >
          <Route path="/" element={<Homepage />}/>
          <Route path="/seeallcities" element={<SeeAllCitiesPage />}/>
          <Route path="/cities/:cityId" element={<CitiesDetailsPage />}/>
          <Route path="/properties/:propertyId" element={<HomeDetailsPage />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
