import firebase from "firebase/app";
require("firebase/auth");
require("firebase/database");
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDmL2WT4Bq4nOjH3U7s9IwNzvADbZ1AX1U",
  authDomain: "web-final-824b5.firebaseapp.com",
  databaseURL:
    "https://web-final-824b5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "web-final-824b5",
  storageBucket: "web-final-824b5.appspot.com",
  messagingSenderId: "351874420752",
  appId: "1:351874420752:web:2ccfdac2d08f5bd1cffa95",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
