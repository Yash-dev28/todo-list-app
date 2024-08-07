// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCn5y6CVB51TqMW5yOytnFOVBFjdd2PIaU",
  authDomain: "project-c7961.firebaseapp.com",
  projectId: "project-c7961",
  storageBucket: "project-c7961.appspot.com",
  messagingSenderId: "328750373199",
  appId: "1:328750373199:web:a89503849c93db2b5e0d3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;