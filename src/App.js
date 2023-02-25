import React,{useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage/Homepage';
import Banner from './components/Banner/Banner';
import Search from './components/Search/Search';


function App() {
  return (
    <div className="App">
      <Header />

      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
