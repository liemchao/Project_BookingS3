import { initializeApp } from "firebase/app";

import {onMessage} from "firebase/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyhkbjsPw286UTN49IpQkoxWMGQxtH03k",
  authDomain: "bookings3-44438.firebaseapp.com",
  projectId: "bookings3-44438",
  storageBucket: "bookings3-44438.appspot.com",
  messagingSenderId: "669931471503",
  appId: "1:669931471503:web:72ec59e40d6cc0c96fe6fa",
  measurementId: "G-YQ31R206YW"
};

const app =initializeApp(firebaseConfig);

const messaging = onMessage(app);

const  publicKey = "BLNi5Y9LmGhliAzP4t6479eTF-K4I7v01d-xRHMoBG0URXYfEFQQIgkgbybSVI5uX09QgF511zIV3-Gyj68Ff44";

export const getToken = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await messaging.getToken({ vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }

  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
