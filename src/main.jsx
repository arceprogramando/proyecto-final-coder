import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkExgyBcS_-cavdKTXz5CA2Pz3Tu3vA3Q",
  authDomain: "zaragoza-shoes-c44ec.firebaseapp.com",
  projectId: "zaragoza-shoes-c44ec",
  storageBucket: "zaragoza-shoes-c44ec.appspot.com",
  messagingSenderId: "732896996580",
  appId: "1:732896996580:web:8e21431e1b6a74181e50f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export default app;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
