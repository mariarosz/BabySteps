import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import UploadWidget from '../UploadWidget/UploadWidget';
import './CreateStep.css'
import { User } from 'firebase/auth'


export function CreateStep({
  setCreated,
  currentUser,
  setShowCreate,
}: { setCreated: Function, currentUser: User | null, setShowCreate: Function}) {
  const stepsRef = collection(db, 'steps');
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    const userId = currentUser?.uid;

    url &&
      addDoc(stepsRef, {
        title,
        date,
        notes,
        userId,
        url,
      }).catch((error) => {
        console.log(error);
      });

    setCreated(true);
    setShowCreate(false);
  }

  return (
    <div className="create-panel">
      <h2>What's new?</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          required
        />
        <input
          type="text"
          name="notes"
          placeholder="notes"
          onChange={(event) => {
            setNotes(event.target.value);
          }}
        />
        <input
          type="date"
          name="date"
          // minDate={new Date(babyBirth)}     COME BACK TO THIS ERROR
          onChange={(event) => {
            setDate(event.target.value);
          }}
          required
        />
        <UploadWidget setUrl={setUrl} url={url} />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}
