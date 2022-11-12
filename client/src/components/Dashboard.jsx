import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
//import { useNavigate } from 'react-router-dom';
import { Create } from './Create';
import { Navbar } from './Navbar';
import Timeline from './Timeline';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default function Dashboard() {
  const { currentUser } = useAuth();
  const userId = currentUser.uid;
  console.log('User ID from dashboard:', currentUser.uid);
  const [showCreate, setShowCreate] = useState(false);
  const [created, setCreated] = useState(false);
  const [babyName, setBabyName] = useState();
  const [babyBirth, setBabyBirth] = useState();

  function handleCreate() {
    setShowCreate(true);
  }

  useEffect(() => {
    async function getData() {
      const usersRef = query(
        collection(db, 'users'),
        where('userId', '==', userId)
      );
      const response = await getDocs(usersRef);
      return response.docs.map((doc) => {
        return { ...doc.data(), id: doc.UserId };
      });
    }
    getData().then((result) => setBabyName(result[0].name));
    getData().then((result) => setBabyBirth(result[0].date));
  }, [userId]);

  return (
    <div>
      <Navbar babyName={babyName} />
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
          Add Step
        </button>
        {showCreate ? (
          <Create
            created={created}
            setCreated={setCreated}
            currentUser={currentUser}
            babyBirth={babyBirth}
            setBabyBirth={setBabyBirth}
          />
        ) : null}
      </div>
    </div>
  );
}
