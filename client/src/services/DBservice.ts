import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export function DBService() {
  const { currentUser } = getAuth();

  const userId = currentUser?.uid;
  const stepsRef = query(
    collection(db, 'steps'),
    where('userId', '==', userId)
  );
  return getDocs(stepsRef).then((response) => response.docs);
}



