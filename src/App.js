import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/globals/navbar';

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
    </div>
  );
}

export default App;
