import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyANI2-D83Rull7fQDn9b8Vcjv9dfbq5IEQ",
    authDomain: "react-fire-4590c.firebaseapp.com",
    projectId: "react-fire-4590c",
    storageBucket: "react-fire-4590c.appspot.com",
    messagingSenderId: "889368201620",
    appId: "1:889368201620:web:3eea39be269d56cc2b2781",
    measurementId: "G-XK8EK1B30C"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);