import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBOrvqTfFFRdFirF0luifGnGfFYixoX_SY",
    authDomain: "busmallah-470dc.firebaseapp.com",
    projectId: "busmallah-470dc",
    storageBucket: "busmallah-470dc.appspot.com",
    messagingSenderId: "839686802569",
    appId: "1:839686802569:web:62c47dff988cff089b4a58",
    measurementId: "G-5QKB9L6C40"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)