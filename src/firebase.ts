import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBY9Zy6t08wmjJVWWNHRB_TfXCyC2YUQDs",
  authDomain: "chat-app-99547.firebaseapp.com",
  projectId: "chat-app-99547",
  storageBucket: "chat-app-99547.firebasestorage.app",
  messagingSenderId: "58517250316",
  appId: "1:58517250316:web:d0fb272b1e5b0c530e6929",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
