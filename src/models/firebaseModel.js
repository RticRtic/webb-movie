
import { initializeApp } from "firebase/app";
import { getFirestore, doc, addDoc, setDoc, getDoc, getDocs, collection, query, where } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { actions } from "../features/authReducer";



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
const auth = getAuth();
const db = getFirestore(app);



export function signIn(dispatch, email, password) {


  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user = userCredential.user;

      getUserDocument(dispatch, user.email, user.uid);

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}



export async function signUp(dispatch, username, email, password) {

  console.log(username + " " + email + " " + password);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user = userCredential.user;

      console.log("user created");

      createUserEntry(dispatch, username, email, user.uid);


    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

}

export function checkForUser(dispatch) {
  onAuthStateChanged(auth, (user) => {
    if (user) {

      getUserDocument(dispatch, user.email, user.uid);

    } else {

    }
  });
}

export async function signOut(dispatch) {
  signOut(auth)
    .then(() => {

      dispatch(actions.signOut());

      return true;

    }).catch((error) => {

    });
};



// ---------------- Firestore --------------

async function createUserEntry(dispatch, username, email, userID) {

  try {
    await setDoc(doc(db, "users", (userID)), {
      username: username,
      email: email,
      userID: userID
    });

    dispatch(actions.signUp({ username: username, email: email, userID: userID, signedIn: true }));

  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getUserDocument(dispatch, email, userID) {

  const docSnap = await getDoc(doc(db, "users", (userID)));

  if (docSnap.exists()) {

    dispatch(actions.signIn({ username: docSnap.data().username, email: email, userID: userID, signedIn: true }));

  } else {


    console.log("No such document!");
  }
}


export async function createReviewEntry(username, movieName, userID, movieID, timestamp, rating, review) {

  try {
    await addDoc(collection(db, "reviews"), {
      username: username,
      movieName: movieName,
      userID: userID,
      movieID: movieID,
      review: review,
      rating: rating,
      timestamp: timestamp,
      upvotes: []
    });

    return true;

  } catch (e) {
    console.error("Error adding document: ", e);
  }


}

export async function getReviewDocuments(movieID, setReviews) {

  const q = query(collection(db, "reviews"), where("movieID", "==", movieID));

  let reviews = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    reviews.push(doc.data());

  });

  setReviews(reviews);
}
