import React, { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import './Navbar.css';

export function Navbar({ babyName } : {babyName: string}) {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  async function handleLogout() {
    setError('');

    try {
      await signOut( getAuth());
      navigate('/login');
    } catch (error) {
      setError('Unable to log out.');
    }
  }

  return (
    <div className="header">
      <h1>{babyName}'s Steps</h1>
      {error && <div>{error}</div>}

      <button className="logout" onClick={handleLogout} >
        Log Out
      </button>
    </div>
  );
}
