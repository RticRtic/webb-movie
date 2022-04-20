
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

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


  // Add Document
// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }
