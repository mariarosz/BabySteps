import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '../Navbar/Navbar';
import Timeline from '../Timeline/Timeline';
import { getAuth } from 'firebase/auth';
import { CreateStep } from './../CreateStep/CreateStep';
import { db } from '../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import './ChildView.css';

export default function ChildView() {
  const test = getAuth();
  console.log('first output from getAuth', test);
  const { currentUser } : any = getAuth();
  console.log(currentUser)
  const userId = currentUser.uid
  console.log('User ID from dashboard:', currentUser.uid);
  const [showCreate, setShowCreate] = useState(false);
  const [created, setCreated] = useState(false);
  const [babyName, setBabyName] = useState('');
  const [babyBirth, setBabyBirth] = useState();
  const babyRef = useRef(false);

  function handleCreate() {
    if (showCreate) {
      setShowCreate(false);
    } else {
      setShowCreate(true);
    }
  }

  useEffect(() => {
    async function getData() {
      const usersRef = query(
        collection(db, 'users'),
        where('userId', '==', userId)
      );
      const response = await getDocs<any>(usersRef);
      return response.docs.map((doc) => {
        return { ...doc.data(), id: doc.get('UserId') };
      });
    }
    getData()
      .then((result) => {
        babyRef.current = true;
        setBabyName(result[0].name);
      })
      .catch((err) => {
        console.log(err);
      });
    getData()
      .then((result) => setBabyBirth(result[0].date))
      .catch((err) => console.log(err));
  }, [userId, babyName]);

  return (
        <>
        {/* <Navbar babyName={babyName} /> */}
          <div className="timeline-container">
            <Timeline
              userId={userId}
              created={created}
              setCreated={setCreated}
              babyName={babyName}
              setBabyName={setBabyName}
              babyBirth={babyBirth}
              setBabyBirth={setBabyBirth}
            />
           <button className="create-button" onClick={handleCreate}>
              {showCreate ? <h3>x</h3> : <h2>+</h2>}
            </button>
            {showCreate ? (
              <CreateStep
                // created={created}
                setCreated={setCreated}
                currentUser={currentUser}
                // babyBirth={babyBirth}
                // setBabyBirth={setBabyBirth}
                setShowCreate={setShowCreate}
              />
            ) : null}
          </div>
      </>
  );
}

//TIMELINE CONTAIENR DOESN?T EXIST