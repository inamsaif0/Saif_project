// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD2bsfG_dT7QDpE3E1jQpQ0cIir2HUHDBg",
  authDomain: "logo-app-ae2dc.firebaseapp.com",
  projectId: "logo-app-ae2dc",
  storageBucket: "logo-app-ae2dc.appspot.com",
  messagingSenderId: "35288280042",
  appId: "1:35288280042:web:0a50433c25b45b2e746093",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };



