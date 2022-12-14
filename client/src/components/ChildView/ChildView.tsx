import React, { useState,useContext } from 'react';
import { Navbar } from '../Navbar/Navbar';
import Timeline from '../Timeline/Timeline';
import { getAuth } from 'firebase/auth';
import { CreateStep } from './../CreateStep/CreateStep';
import './ChildView.css';
import  GlobalContext from '../../contexts/GlobalContext';
import { useParams } from 'react-router-dom';
import { query,where, getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';

export default function ChildView() {

  const { name } = useParams();
  const babyName = name;

  const [showCreate, setShowCreate] = useState(false);
  const [created, setCreated] = useState(false);
  const [babyId, setBabyId] = useState('')
  const [babyBirth, setBabyBirth] = useState('')
  const { currentUser } : any = getAuth();
  const userId = currentUser.uid

  const grabBabyId = async () => {
    const babies = query(collection(db, 'users', userId, 'babies'), where('name', '==', babyName));
    const querySnapshot = await getDocs(babies);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
      setBabyId(doc.id)
      setBabyBirth(doc.data().date)
    });
  }

  grabBabyId();


  function handleCreate() {
    if (showCreate) {
      setShowCreate(false);
    } else {
      setShowCreate(true);
    }
  }

  return (
    <div className="main-container">
      <Navbar />
        {babyName ? (<Timeline
          userId={userId}
          created={created}
          setCreated={setCreated}
          babyName={babyName}
          babyBirth={babyBirth}
          babyId={babyId}
        />) : (null)}
      <button className="create-button" onClick={handleCreate}>
        {showCreate ? <h3>x</h3> : <h2>+</h2>}
      </button>
      {showCreate && currentUser ? (
        <CreateStep
          setCreated={setCreated}
          currentUser={currentUser}
          setShowCreate={setShowCreate}
          babyId={babyId}
        />
      ) : null}
    </div>
  );
}

