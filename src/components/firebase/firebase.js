// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDh_Y4gqnZz1yVeIhpToop_nXZpCWawOQM",

  authDomain: "hospital-login-system-549f0.firebaseapp.com",

  projectId: "hospital-login-system-549f0",

  storageBucket: "hospital-login-system-549f0.appspot.com",

  messagingSenderId: "509897103652",

  appId: "1:509897103652:web:22c8e2d756bae4e9173bb1",

  measurementId: "G-5F1LF214WR"

};


// Initialize Firebase

//const app =!getApps().length? initializeApp(firebaseConfig): getApp();
//const auth = getAuth(app);

//export {auth};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
