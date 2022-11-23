import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig= {
  apiKey: "AIzaSyByiED7p3FtVXY-2oEtYsMljv-XlSiGNjQ",
  authDomain: "babysteps-88708.firebaseapp.com",
  projectId: "babysteps-88708",
  storageBucket: "babysteps-88708.appspot.com",
  messagingSenderId: "1041194570156",
  appId: "1:1041194570156:web:710c39f58bd460639b2a09"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


