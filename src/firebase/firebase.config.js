// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4OjtrpVTA81IMIsGBWMAPRpw4qBcS_cM",
  authDomain: "ema-john-with-firebase-f9d0e.firebaseapp.com",
  projectId: "ema-john-with-firebase-f9d0e",
  storageBucket: "ema-john-with-firebase-f9d0e.appspot.com",
  messagingSenderId: "44386162233",
  appId: "1:44386162233:web:f0963aa5432ba4d6e5dfe8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;