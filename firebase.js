// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfi7EQ4avjDBaFwSwM3weLKWaBJx3aAmE",
  authDomain: "annapurna-cable-car.firebaseapp.com",
  projectId: "annapurna-cable-car",
  storageBucket: "annapurna-cable-car.appspot.com",
  messagingSenderId: "756868456624",
  appId: "1:756868456624:web:310b8ba33977efe9599b75",
  measurementId: "G-B5P2P9JLPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth();

export {auth,db}