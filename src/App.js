
import './App.css';
import React, { useState } from 'react';
import { getSearchedApi } from './models/apiSearchInput';

import NavigationBar from './components/globals/navbar';
import Footer from './components/globals/footer';
import TrendingMovies from './components/home/trendingMovies';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/homepage';
import Checkout from './components/shopping/checkout';
import MovieInfoPage from './components/movie-info/movieInfoPage';


function App() {


  let mediaQuery = window.matchMedia('(max-width: 700px)');

  const [device, setDevice] = useState(() => {

    if(mediaQuery.matches) {
      return 'mobile'
  } else {
      return 'web'
  }

  });
  

  mediaQuery.addEventListener('change', () => {

    if(mediaQuery.matches) {
      setDevice('mobile');
  } else {
      setDevice('web');
  }
  });


  return (
    <div className="App">
      <NavigationBar device={device}/>
      
      <Routes>

        <Route exact path='/' element = {
          <Home device={device}/>
        }/>

        <Route exact path={'/movie/:id/:title'} element = {
          <MovieInfoPage device={device}/>
        }/>

        <Route exact path='/checkout' element = {
          <Checkout/>
        }
        />

      </Routes>

      <Footer />

    </div>
    
  );
}

export default App;
