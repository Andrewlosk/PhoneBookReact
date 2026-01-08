// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGd38_g9m8VSDQ2aPmEMDRaiPkHPxaclg",
  authDomain: "phonebook-4e472.firebaseapp.com",
  projectId: "phonebook-4e472",
  storageBucket: "phonebook-4e472.firebasestorage.app",
  messagingSenderId: "328118026488",
  appId: "1:328118026488:web:ec85c294849939bf527b0d",
  measurementId: "G-NKJTV8G96S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);