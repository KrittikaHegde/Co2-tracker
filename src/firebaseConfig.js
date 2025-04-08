// Import the required functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database"; // ✅ Added database functions
import { getAnalytics } from "firebase/analytics";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD8luFzbQUUQwqFqIl-Yhx2TaZGpHunkc",
  authDomain: "co2-tracker-46a06.firebaseapp.com",
  databaseURL: "https://co2-tracker-46a06-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "co2-tracker-46a06",
  storageBucket: "co2-tracker-46a06.appspot.com", // ✅ Fixed storage URL
  messagingSenderId: "96051977507",
  appId: "1:96051977507:web:3a0a55e3cb65c61d5c8096",
  measurementId: "G-2CSCBPYB6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app); // ✅ Initialize database

export { database };
