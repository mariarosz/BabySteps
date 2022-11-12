import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Confirmation } from './Confirmation';

export function AddBaby({ babyName, setBabyName, babyBirth, setBabyBirth }) {
  const { currentUser } = useAuth();

  /* const [babyName, setBabyName] = useState('');
  const [babyBirth, setBabyBirth] = useState(''); */
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
        <Confirmation currentUser={currentUser} babyName={babyName} />
      ) : (
        <div className="add-baby-container">
          <h1>What's your baby's name?</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Baby's name" />
            <input type="date" name="date" />
            <button type="submit">send</button>
          </form>
        </div>
      )}
    </div>
  );
}
