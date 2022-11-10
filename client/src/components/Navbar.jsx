import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError('');

    try {
      await logout();
      navigate('/login');
    } catch (error) {
      setError('Unable to log out.');
    }
  }

  return (
    <div className="header">
      <h1>Joe's Steps</h1>
      {error && <div>{error}</div>}
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
