import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyBl8P9BBNA-xbBlqxy3uG0kC32zeFtb5Ck",
  authDomain: "zcrafto.firebaseapp.com",
  projectId: "zcrafto",
  storageBucket: "zcrafto.appspot.com",
  messagingSenderId: "445396150161",
  appId: "1:445396150161:web:2118b48775d8c4a8a65c30",
  measurementId: "G-EFPE8JQ0L1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)