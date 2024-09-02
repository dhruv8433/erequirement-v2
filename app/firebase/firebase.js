// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqDwH26KJIrqqeEe5gY1txnwbqdq_Vo08",
  authDomain: "erequirement-v2.firebaseapp.com",
  projectId: "erequirement-v2",
  storageBucket: "erequirement-v2.appspot.com",
  messagingSenderId: "311084843277",
  appId: "1:311084843277:web:1102fabb089a1c2ebcf044",
  measurementId: "G-63TR6W29DH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Google Auth Provider
const provider = new GoogleAuthProvider();

export { auth, provider };
