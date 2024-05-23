// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf89hBXAXMnxqnaAq-OACl9OoHUL4C900",
  authDomain: "dashboard-6285c.firebaseapp.com",
  projectId: "dashboard-6285c",
  storageBucket: "dashboard-6285c.appspot.com",
  messagingSenderId: "531492304108",
  appId: "1:531492304108:web:962eabf2d180727c4b21c9",
  measurementId: "G-CCTCBXCJDQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();;
export default app;