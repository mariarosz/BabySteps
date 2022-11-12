import React from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

export function Create({ created, setCreated, currentUser }) {
  const stepsRef = collection(db, 'steps');

  async function handleSubmit(event) {
    event.preventDefault();

    const userId = currentUser.uid;
    const title = event.target.title.value;
    const date = event.target.date.value;
    const notes = event.target.notes.value;

    addDoc(stepsRef, {
      title: title,
      date: date,
      notes: notes,
      userId: userId,
    })
      .then(() => {
        console.log('data added:', title, notes);
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
        <input type="text" name="title" placeholder="new step title" required />
        <input type="text" name="notes" placeholder="anything more..." />
        <input type="date" name="date" required />
        <button type="submit">Add a Step</button>
      </form>
    </div>
  );
}
