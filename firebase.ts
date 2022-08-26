// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4ygqXjHkCZq-FBXQqZ7rmt5xGXsE22bE",
  authDomain: "netflix-movie-app-5818c.firebaseapp.com",
  projectId: "netflix-movie-app-5818c",
  storageBucket: "netflix-movie-app-5818c.appspot.com",
  messagingSenderId: "899471331999",
  appId: "1:899471331999:web:ef76c4692b15e9a73ec8aa"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore()
const auth = getAuth()

export default app;
export { auth, db }