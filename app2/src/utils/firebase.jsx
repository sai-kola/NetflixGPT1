// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI6RcHLa4y0EH8vCWS7VhXSeAb19fYwFs",
  authDomain: "netflixgpt-8f378.firebaseapp.com",
  projectId: "netflixgpt-8f378",
  storageBucket: "netflixgpt-8f378.firebasestorage.app",
  messagingSenderId: "651755272513",
  appId: "1:651755272513:web:47bc5fad2197525e2ac9c0",
  measurementId: "G-X9YLVJ05TT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();