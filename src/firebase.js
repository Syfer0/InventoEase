// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5H64hEXiKjO7ddJOMGPPB6dJIuipaTas",
  authDomain: "inventoease-8644b.firebaseapp.com",
  projectId: "inventoease-8644b",
  storageBucket: "inventoease-8644b.appspot.com",
  messagingSenderId: "722329583585",
  appId: "1:722329583585:web:4e43e3a73738bd98055ca0",
  measurementId: "G-HJZ6H2D2VJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
