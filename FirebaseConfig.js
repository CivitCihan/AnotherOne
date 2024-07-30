// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-W5OZvPmIFCib8IaaWvU0PUKOpZqtmJE",
  authDomain: "another1-970c9.firebaseapp.com",
  projectId: "another1-970c9",
  storageBucket: "another1-970c9.appspot.com",
  messagingSenderId: "260903481329",
  appId: "1:260903481329:web:e2651da90048e4131f9e50"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const FIREBASE_DB = getFirestore(FIREBASE_APP);

export const createUserWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await FIREBASE_AUTH.createUserWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export { FIREBASE_AUTH, FIREBASE_DB, FIREBASE_APP };