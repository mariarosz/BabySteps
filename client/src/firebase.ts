
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig= {
  apiKey: "AIzaSyDgW-LsVhFQ4CUCDTe10uEHL1U808kK5JU",
  authDomain: "babysteps-13f8c.firebaseapp.com",
  projectId: "babysteps-13f8c",
  storageBucket: "babysteps-13f8c.appspot.com",
  messagingSenderId: "621749573096",
  appId: "1:621749573096:web:d879aebabb873f1d30805d"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);



// apiKey: "AIzaSyDgW-LsVhFQ4CUCDTe10uEHL1U808kK5JU",
// authDomain: "babysteps-13f8c.firebaseapp.com",
// projectId: "babysteps-13f8c",
// storageBucket: "babysteps-13f8c.appspot.com",
// messagingSenderId: "621749573096",
// appId: "1:621749573096:web:d879aebabb873f1d30805d"
// });


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




