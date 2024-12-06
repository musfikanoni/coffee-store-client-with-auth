// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFK91bgT01eYCI7ZgWm7g_9iS-uWEYhE0",
  authDomain: "coffee-store-a24f4.firebaseapp.com",
  projectId: "coffee-store-a24f4",
  storageBucket: "coffee-store-a24f4.firebasestorage.app",
  messagingSenderId: "425716196447",
  appId: "1:425716196447:web:f7c1e58b4f85c48465a7ea"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);