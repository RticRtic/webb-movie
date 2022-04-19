import logo from './logo.svg';
import './App.css';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyCbT60jkWmxdVIpr_i_WzlfSiWGh8H8Pe8",
    authDomain: "webb-movie.firebaseapp.com",
    projectId: "webb-movie",
    storageBucket: "webb-movie.appspot.com",
    messagingSenderId: "279690608350",
    appId: "1:279690608350:web:af5cc45099a4e95b620c4f",
    measurementId: "G-5XKRCP54GP"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const analytics = getAnalytics(app);


  

// try {
//   const docRef =  addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
