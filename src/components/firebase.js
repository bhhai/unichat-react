import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyC-72EKTSm77a5jW64hAQ6thuTSHNIWhaU",
    authDomain: "unichat-31d44.firebaseapp.com",
    projectId: "unichat-31d44",
    storageBucket: "unichat-31d44.appspot.com",
    messagingSenderId: "71719129238",
    appId: "1:71719129238:web:a81b097cd951e9f447f2b7",
  })
  .auth();
