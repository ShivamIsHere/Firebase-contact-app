// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrEQTk1mdZLQ7yNtz6Q6FniE5FylY401c",
  authDomain: "contact-app-b44c4.firebaseapp.com",
  projectId: "contact-app-b44c4",
  storageBucket: "contact-app-b44c4.appspot.com",
  messagingSenderId: "361112560349",
  appId: "1:361112560349:web:ecbd8420e9c1f631abf134"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export constdb = getFirestore(app);