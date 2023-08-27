// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuN9e4Tc1n48zjIZYSoYFK4Vtsb9XhaHo",
  authDomain: "glitter-bottle.firebaseapp.com",
  projectId: "glitter-bottle",
  storageBucket: "glitter-bottle.appspot.com",
  messagingSenderId: "832040440827",
  appId: "1:832040440827:web:7ac335d99f25106632b15e",
  measurementId: "G-N32DF8ZMT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;