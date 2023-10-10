// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl8P9BBNA-xbBlqxy3uG0kC32zeFtb5Ck",
  authDomain: "zcrafto.firebaseapp.com",
  databaseURL: "https://zcrafto-default-rtdb.firebaseio.com",
  projectId: "zcrafto",
  storageBucket: "zcrafto.appspot.com",
  messagingSenderId: "445396150161",
  appId: "1:445396150161:web:2118b48775d8c4a8a65c30",
  measurementId: "G-EFPE8JQ0L1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export default getFirestore();
