import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAbFsv0sPnCo8H6mFmkbILr9s8g6lV4uo0",
  authDomain: "newlista-42d04.firebaseapp.com",
  databaseURL: "https://newlista-42d04-default-rtdb.firebaseio.com",
  projectId: "newlista-42d04",
  storageBucket: "newlista-42d04.firebasestorage.app",
  messagingSenderId: "725343088559",
  appId: "1:725343088559:web:0567a44c31983a3032895a",
  measurementId: "G-VHZZN2NTCH",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
