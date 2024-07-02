// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, orderBy, query, doc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyART44llhBhJRo8vjt3LS2cOqd9haOdHnE",
    authDomain: "portfolio-v2-b7cc7.firebaseapp.com",
    projectId: "portfolio-v2-b7cc7",
    storageBucket: "portfolio-v2-b7cc7.appspot.com",
    messagingSenderId: "1059256515207",
    appId: "1:1059256515207:web:8562551a2216d4e9c21622",
    measurementId: "G-KFK141G0TX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GithubAuthProvider();

export { auth, provider, db, signInWithPopup, collection, addDoc, getDocs, orderBy, query, doc, setDoc };
