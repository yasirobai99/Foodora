import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCIPSXdcbQmbUF9plHlzgINH9iVXAIL9hw",
    authDomain: "foodapp-cd043.firebaseapp.com",
    databaseURL: "https://foodapp-cd043-default-rtdb.firebaseio.com",
    projectId: "foodapp-cd043",
    storageBucket: "foodapp-cd043.appspot.com",
    messagingSenderId: "103111415308",
    appId: "1:103111415308:web:1c6a9d536ba24c90674029",
    measurementId: "G-8GPMGJFVE9"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
