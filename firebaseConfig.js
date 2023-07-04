// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyD3oQxN6p0y7wPhZbB_la_jy4r0W0BVqj4",
  authDomain: "portfolio-9462b.firebaseapp.com",
  projectId: "portfolio-9462b",
  storageBucket: "portfolio-9462b.appspot.com",
  messagingSenderId: "474824749578",
  appId: "1:474824749578:web:ce73feb85a7f07ce68a5f3",
  measurementId: "G-C94XJGP6QG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (typeof window !== 'undefined') {
  const analytics = getAnalytics(app);
  // Additional code that relies on window or analytics
}
export const database=getFirestore(app);