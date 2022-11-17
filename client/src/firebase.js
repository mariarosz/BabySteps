
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyDgW-LsVhFQ4CUCDTe10uEHL1U808kK5JU",
  authDomain: "babysteps-13f8c.firebaseapp.com",
  projectId: "babysteps-13f8c",
  storageBucket: "babysteps-13f8c.appspot.com",
  messagingSenderId: "621749573096",
  appId: "1:621749573096:web:d879aebabb873f1d30805d"
});

export const auth = app.auth();
export const db = getFirestore(app);

export default app;






// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyDgW-LsVhFQ4CUCDTe10uEHL1U808kK5JU",
//   authDomain: "babysteps-13f8c.firebaseapp.com",
//   projectId: "babysteps-13f8c",
//   storageBucket: "babysteps-13f8c.appspot.com",
//   messagingSenderId: "621749573096",
//   appId: "1:621749573096:web:d879aebabb873f1d30805d"
// };

// const app = initializeApp(firebaseConfig);




