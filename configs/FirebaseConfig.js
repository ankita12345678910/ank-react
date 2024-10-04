// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5ONi4Vy5-2PoqTRWNivgiNxEIb0d5d_4",
  authDomain: "ank-react.firebaseapp.com",
  projectId: "ank-react",
  storageBucket: "ank-react.appspot.com",
  messagingSenderId: "408154604288",
  appId: "1:408154604288:web:eae7a05b7c04f8d8aba9e5",
  measurementId: "G-VQXCMCKSDT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);