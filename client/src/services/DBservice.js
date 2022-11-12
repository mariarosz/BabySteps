//import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';

export function DBService() {
  const { currentUser } = useAuth();

  const userId = currentUser.uid;
  console.log(userId);
  const stepsRef = query(
    collection(db, 'steps'),
    where('userId', '==', userId)
  );
  return getDocs(stepsRef).then((response) => response.docs);
}

//module.exports = { DBService };
