
import './App.css';
import React, { useState } from 'react';

import NavigationBar from './components/globals/navbar';
import Footer from './components/globals/footer';

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
      <Footer />
    </div>
  );
}

export default App;
