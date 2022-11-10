import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
//import { collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';

const usersRef = collection(db, 'users');
/* await setDoc(doc(usersRef, 'SF'), {
  name: 'Joe',
  state: 'CA',
  country: 'USA',
  capital: false,
  population: 860000,
  regions: ['west_coast', 'norcal'],
}); */

export function DBService() {
  return <div>db</div>;
  //const { currentUser } = useAuth();
  /* async function writeBabyDataToUser(babyName, babyBirth) {
    updateProfile(currentUser, {
      babyName: babyName,
      babyBirth: babyBirth,
    });
  } */
  /* createStep: async function (userId, title, date, notes) {
    set(ref(db, 'users/' + userId), {
      title: title,
      date: date,
      notes: notes,
    });
  }, */
}

//module.exports = {};
/* 
import { getAuth, updateProfile } from 'firebase/auth';
const auth = getAuth();
updateProfile(auth.currentUser, {
  displayName: 'Jane Q. User',
  photoURL: 'https://example.com/jane-q-user/profile.jpg',
})
  .then(() => {
    // Profile updated!
    // ...
  })
  .catch((error) => {
    // An error occurred
    // ...
  });
 */

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
