// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBio4YrXm6SWY9ulaoi4G70bxt71TV7Qbk",
  authDomain: "saqlain-portfolio.firebaseapp.com",
  projectId: "saqlain-portfolio",
  storageBucket: "saqlain-portfolio.appspot.com",
  messagingSenderId: "950403978775",
  appId: "1:950403978775:web:308d2020cbbd3488d5ee52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
