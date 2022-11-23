import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { db } from '../../firebase';
import { doc, collection, addDoc} from 'firebase/firestore';
import { Confirmation } from '../Confirmation/Confirmation';

import './AddBaby.css'
import { Navbar } from '../Navbar/Navbar';

export function AddBaby() {

  const { currentUser }: any = getAuth();
  const userId: string = currentUser.uid;

  const [confirmation, setConfirmation] = useState(false);

  const usersRef = doc(db, 'users', userId);
  const babyRef = collection(usersRef, 'babies')

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      name: {value: string};
      date: {value: Date};
    }
    const name = target.name.value;
    const date = target.date.value;

    addDoc(babyRef, {
        name: name,
        date: date,
        steps: []
    })
      .then(() => {
        console.log('data added:', name, date );
      })
      .catch((error) => {
        console.log(error);
      });
    setConfirmation(true);
  };

const babyName = 'placeholder'

  return (
    <div className='main-container'>
      <Navbar />
      {confirmation ? (
        <>
        <Confirmation babyName={babyName} />
        </>
      ) : (
        <div className="centralised-content-container baby">
          <div id="content-box-baby">
            <h1>Who's The Little One?</h1>
            <form onSubmit={handleSubmit}>
              <label>Baby's Name</label>
              <input type="text" name="name" placeholder="" />
              <label>Baby's date of Birth</label>
              <input type="date" name="date" />
              <button type="submit">ADD</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
