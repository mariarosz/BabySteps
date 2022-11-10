import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Confirmation } from './Confirmation';

export function AddBaby() {
  const { currentUser } = useAuth();

  console.log('User ID from addBaby:', currentUser.uid);
  const [babyName, setBabyName] = useState('');
  const [babyBirth, setBabyBirth] = useState('');
  const [confirmation, setConfirmation] = useState(false);
  const [hideForm, setHideForm] = useState(true);

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

    event.target.reset();
  };

  const handleClick = () => {
    setConfirmation(true);
    setHideForm(false);
  };

  return (
    <div>
      <h1>What's your baby name?</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Baby's name" />
        <input type="date" name="date" />
        <button type="submit" onClick={handleClick}>
          send
        </button>
        {confirmation ? <Confirmation currentUser={currentUser} /> : null}
        {hideForm ? <> </> : null}
      </form>
    </div>
  );
}
