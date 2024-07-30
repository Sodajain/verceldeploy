// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcgVYAAXSX6g33XByYyBqENd6rti7lvTY",
  authDomain: "habiiito.firebaseapp.com",
  projectId: "habiiito",
  storageBucket: "habiiito.appspot.com",
  messagingSenderId: "494051626657",
  appId: "1:494051626657:web:d45f92d0a89c4d8fe06ae0",
  measurementId: "G-YR4492LCNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);