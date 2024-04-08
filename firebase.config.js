
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ7GFb1bYyQ70zEFC9IhFAUB56V2tIc9s",
  authDomain: "assignment-nine-5e792.firebaseapp.com",
  projectId: "assignment-nine-5e792",
  storageBucket: "assignment-nine-5e792.appspot.com",
  messagingSenderId: "795961620092",
  appId: "1:795961620092:web:59b23e23dca71d7fc0bbf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);