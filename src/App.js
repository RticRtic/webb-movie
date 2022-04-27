import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { getSearchedApi } from './models/apiSearchInput';

import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/globals/navbar';
import Home from './components/homepage/Home';
import SearchInput from './components/homepage/SearchInput';

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
        <Route exact path="/" element={<Home device={device} />} />
      </Routes>

      
      
    </div>
    
  );
}

export default App;
