// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYY6VPMHg6aBQw9xgJWnaERqgD2QvPoUY",
  authDomain: "bookstore-8cb30.firebaseapp.com",
  projectId: "bookstore-8cb30",
  storageBucket: "bookstore-8cb30.firebasestorage.app",
  messagingSenderId: "998328258256",
  appId: "1:998328258256:web:0da2b767775f3f20d558d5",
  measurementId: "G-LBYJ4FJSDW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
