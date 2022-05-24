
import './App.css';
import React, { useEffect, useState } from 'react';

import NavigationBar from './components/globals/navbar';
import Footer from './components/globals/footer';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/homePage';
import Checkout from './components/shopping/checkout';
import MovieInfoPage from './components/movie-info/movieInfoPage';

import Catalog from './components/catalog/Catalog';

import ShoppingCart from './components/globals/shoppingCart';

import Login from './components/login/login';
import SignUp from './components/login/signup';
import { useDispatch } from 'react-redux';
import { checkForUser } from './models/firebaseModel';
import UserProfile from './components/login/profile';
import OrderConfirmation from './components/shopping/orderConfirmation';






function App() {

  const [shoppingCartActive, setShoppingCartActive] = useState(false);
  let dispatch = useDispatch();

  useEffect(() => {
    checkForUser(dispatch);
  },[])


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
          <Checkout device={device}/>
        }
        />

        <Route exact path='/orderConfirmation' element = {
          <OrderConfirmation device={device} />
        }
        />

        <Route path="/catalog" element={<Catalog device={device}/>}/>

        <Route path='/login' element = {
          <Login/>
        }
        />
        
        <Route path='/register' element = {
          <SignUp/>
        }
        />
        
        <Route path='/user/:username' element = {
          <UserProfile/>
        }
        />

      </Routes>

      

      <Footer />

    </div>
    
  );
}

export default App;
