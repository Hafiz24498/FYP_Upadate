// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUyzly_az3MfCBQSCWxT2gJwGPceHWEzU",
    authDomain: "fyp2022-d629a.firebaseapp.com",
    projectId: "fyp2022-d629a",
    storageBucket: "fyp2022-d629a.appspot.com",
    messagingSenderId: "164708179723",
    appId: "1:164708179723:web:46a589437b2a016fa68c0e",
    measurementId: "G-ZTPEHCQKDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
