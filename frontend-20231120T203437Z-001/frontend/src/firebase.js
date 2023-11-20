// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD2bsfG_dT7QDpE3E1jQpQ0cIir2HUHDBg",
  authDomain: "logo-app-ae2dc.firebaseapp.com",
  projectId: "logo-app-ae2dc",
  storageBucket: "logo-app-ae2dc.appspot.com",
  messagingSenderId: "35288280042",
  appId: "1:35288280042:web:0a50433c25b45b2e746093",
  measurementId: "G-L7WVXMZVMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };