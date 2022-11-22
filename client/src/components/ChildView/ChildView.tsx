import React, { useState, useEffect, useRef, useContext } from 'react';
import { Navbar } from '../Navbar/Navbar';
import Timeline from '../Timeline/Timeline';
import { getAuth } from 'firebase/auth';
import { CreateStep } from './../CreateStep/CreateStep';
import { db } from '../../firebase';
import { collection, query, where, getDoc, doc } from 'firebase/firestore';
import './ChildView.css';
import  GlobalContext,{GlobalContextProvider}  from '../../contexts/GlobalContext';
import { useParams } from 'react-router-dom';

export default function ChildView() {

  const {name} = useParams();
  const babyName = name;

  const [showCreate, setShowCreate] = useState(false);
  const [created, setCreated] = useState(false);
  // const {babyName, setBabyName} = useContext(GlobalContext);
  const {babyBirth, setBabyBirth} = useContext(GlobalContext);
  const { currentUser } : any = getAuth();
  const userId = currentUser.uid
  const babyRef = useRef(false);


  useEffect(() => {
    async function getData() {
      try {
        const userIdQuery = doc(db, 'users', userId);
        const response = await getDoc<any>(userIdQuery);
        const userData = response.data()
        console.log(userData)
        return userData.babies.map((baby:any) => {
          return baby;
        });
      } catch(error) {
        console.log(error)
      }
    }
    getData()
      .then((result) => {
        babyRef.current = true;
        setBabyBirth(result.date)
        console.log(result.date)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

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
        />) : (null)}
      <button className="create-button" onClick={handleCreate}>
        {showCreate ? <h3>x</h3> : <h2>+</h2>}
      </button>
      {showCreate ? (
        <CreateStep
          setCreated={setCreated}
          currentUser={currentUser}
          setShowCreate={setShowCreate}
        />
      ) : null}
    </div>
  );
}

