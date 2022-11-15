import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import UploadWidget from './UploadWidget';

export function CreateStep({ setCreated, currentUser }) {
  const stepsRef = collection(db, 'steps');
  const [url, setUrl] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const userId = currentUser.uid;
    const title = event.target.title.value;
    const date = event.target.date.value;
    const notes = event.target.notes.value;

    url &&
      addDoc(stepsRef, {
        title,
        date,
        notes,
        userId,
        url,
      })
        .then((data) => {
          console.log('data added:', data);
        })
        .catch((error) => {
          console.log(error);
        });

    setCreated(true);
    event.target.reset();
  }

  return (
    <div className="create-panel">
      <h2>What's new?</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="title" required />
        <input type="text" name="notes" placeholder="notes" />
        <input type="date" name="date" required />
        <UploadWidget setUrl={setUrl} />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}
