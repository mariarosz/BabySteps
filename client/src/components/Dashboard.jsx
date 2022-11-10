import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
//import { useNavigate } from 'react-router-dom';
import { Create } from './Create';
import { Navbar } from './Navbar';
import Timeline from './Timeline';

export default function Dashboard() {
  const { currentUser } = useAuth();
  //const navigate = useNavigate();
  const [showCreate, setShowCreate] = useState(false);

  function handleCreate() {
    setShowCreate(true);
  }

  return (
    <div className="timeline-container">
      <Navbar />
      <div className="body">
        <Timeline />
        <button className="create-button" onClick={handleCreate}>
          Add Step
        </button>
        {showCreate ? <Create currentUser={currentUser} /> : null}
      </div>
    </div>
  );
}
