import { ref, set } from 'firebase/database';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

export const DBService = {
  writeBabyData: async function (userId, babyName, babyBirth) {
    set(ref(db, 'users/' + userId), {
      babyName: babyName,
      babyBirth: babyBirth,
    });
  },

  createStep: async function (userId, title, date, notes) {
    set(ref(db, 'users/' + userId), {
      title: title,
      date: date,
      notes: notes,
    });
  },
};

/* try {
  const docRef = await addDoc(collection(db, 'users'), {
    first: 'Ada',
    last: 'Lovelace',
    born: 1815,
  });
  console.log('Document written with ID: ', docRef.id);
} catch (e) {
  console.error('Error adding document: ', e);
} */

//module.exports = DBService;
