// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYzSkACzqbru7-yJanB9wq51uqJg5Y9dc",
  authDomain: "netfix-564df.firebaseapp.com",
  projectId: "netfix-564df",
  storageBucket: "netfix-564df.firebasestorage.app",
  messagingSenderId: "1012620509075",
  appId: "1:1012620509075:web:82b1eda4689882aada7266",
  measurementId: "G-QVS67DDSP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);