
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

import Catalog from './components/catalog/Catalog';

import ShoppingCart from './components/globals/shoppingCart';





function App() {

  const [shoppingCartActive, setShoppingCartActive] = useState(false);


  const toggleShoppingCart = () => {
    setShoppingCartActive(!shoppingCartActive);
    console.log('toggled cart');
  };

  


  // const [catalogMovieList, setcatalogMovieList] = ([]);
  let mediaQuery = window.matchMedia('(max-width: 900px)');

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
      
      {(shoppingCartActive) ? 
      (
        <ShoppingCart device={device} toggleShoppingCart={toggleShoppingCart}/>
      )
      :
      (
        null
      )}
      
      <NavigationBar device={device} toggleShoppingCart={toggleShoppingCart}/>
      
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

        <Route path="/catalog" element={<Catalog device={device}/>}/>

      </Routes>

      <Footer />

    </div>
    
  );
}

export default App;
