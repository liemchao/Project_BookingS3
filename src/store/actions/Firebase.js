import { initializeApp } from "firebase/app";
import{ getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAyhkbjsPw286UTN49IpQkoxWMGQxtH03k",
    authDomain: "bookings3-44438.firebaseapp.com",
    projectId: "bookings3-44438",
    storageBucket: "bookings3-44438.appspot.com",
    messagingSenderId: "669931471503",
    appId: "1:669931471503:web:72ec59e40d6cc0c96fe6fa",
    measurementId: "G-YQ31R206YW"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 
  
