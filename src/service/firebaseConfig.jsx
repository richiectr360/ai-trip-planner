// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkh2sGULb5pU6wLtZojLq6b6P9N4PyKmE",
  authDomain: "ai-travel-planner-a6deb.firebaseapp.com",
  projectId: "ai-travel-planner-a6deb",
  storageBucket: "ai-travel-planner-a6deb.appspot.com",
  messagingSenderId: "12480128149",
  appId: "1:12480128149:web:1f656cc0130b43a6a2e79c",
  measurementId: "G-BEW93HMH5R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
//const analytics = getAnalytics(app);