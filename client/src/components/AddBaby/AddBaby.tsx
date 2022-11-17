import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Confirmation } from '../Confirmation/Confirmation';
import './AddBaby.css'

export interface currentUser {
  term: string;
}

export function AddBaby({ babyName, setBabyName, setBabyBirth }) {
  const { currentUser } = useAuth();

  const [confirmation, setConfirmation] = useState(false);

  const usersRef = collection(db, 'users');

  const handleSubmit = (event) => {
    event.preventDefault();

    const userId = currentUser.uid;
    const name = event.target.name.value;
    setBabyName(name);
    const date = event.target.date.value;
    setBabyBirth(date);

    addDoc(usersRef, {
      name: name,
      date: date,
      userId: userId,
    })
      .then(() => {
        console.log('data added:', name, date);
      })
      .catch((error) => {
        console.log(error);
      });

    setConfirmation(true);

    event.target.reset();
  };

  return (
    <div>
      {confirmation ? (
        <Confirmation babyName={babyName} />
      ) : (
        <div className="centralised-content-container baby">
          <div id="content-box-baby">
            <h1>Who's The Little One?</h1>
            <form onSubmit={handleSubmit}>
              <label>baby's Name</label>
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
