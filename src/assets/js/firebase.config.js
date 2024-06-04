// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC22qhpf2JrK7aoZxZWeghQYgQ2SlPKY7E",
  authDomain: "ndasign-fd3fb.firebaseapp.com",
  projectId: "ndasign-fd3fb",
  storageBucket: "ndasign-fd3fb.appspot.com",
  messagingSenderId: "941895688104",
  appId: "1:941895688104:web:a162ce5e34d70bebd3c79d",
  measurementId: "G-C8G8PKR432"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);