import React, { useState } from 'react';
import { db } from '../../firebase';
import {doc} from 'firebase/firestore';
import UploadWidget from '../UploadWidget/UploadWidget';
import './CreateStep.css'
import { User } from 'firebase/auth'
import {updateDoc, arrayUnion} from 'firebase/firestore'

export function CreateStep({
  setCreated,
  currentUser,
  setShowCreate,
  babyId,
}: { setCreated: Function, currentUser: User, setShowCreate: Function, babyId: string }) {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const userId = currentUser.uid;


  const stepsRef = doc(db, 'users', userId, 'babies', babyId);



  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

      await updateDoc(stepsRef, {
        steps: arrayUnion({
          title: title,
          date: date,
          notes: notes,
          url: url
        })
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
