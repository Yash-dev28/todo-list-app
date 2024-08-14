// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwdE8aeIP7TvR7oJ2WzbcXrCfeCY8raag",
  authDomain: "todo-e602e.firebaseapp.com",
  projectId: "todo-e602e",
  storageBucket: "todo-e602e.appspot.com",
  messagingSenderId: "854240712393",
  appId: "1:854240712393:web:adec07ba5b619a72c51f18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;