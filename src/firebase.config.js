// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5BF5ld3JEUFK24g5OiRLufWlVD82pvZ8",
  authDomain: "house-marketplace-app-9045f.firebaseapp.com",
  projectId: "house-marketplace-app-9045f",
  storageBucket: "house-marketplace-app-9045f.appspot.com",
  messagingSenderId: "340056354637",
  appId: "1:340056354637:web:35193a8fda7ab5e9ff9104"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()