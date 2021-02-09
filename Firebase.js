// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";


// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCEZyEr6aebg-senlLR6PfKln0s9fHlsno",
    authDomain: "netflix-mod.firebaseapp.com",
    databaseURL: "https://netflix-mod.firebaseio.com",
    projectId: "netflix-mod",
    storageBucket: "netflix-mod.appspot.com",
    messagingSenderId: "469032441640",
    appId: "1:469032441640:web:03d744638257b5ed71e21d",
    measurementId: "G-S0WCTYSCEV"
  };

firebase.initializeApp(firebaseConfig);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

export default firebase;

