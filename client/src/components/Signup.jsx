import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    if (passwordRef.current.value !== passwordConfRef.current.value) {
      return setError('Passwords do not match.');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }

  return (
    <>
      <div className="signup-container">
        <div className="signup-body">
          <h1>Signup</h1>
          {error && <div>{error}</div>}
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" ref={emailRef} required />
            <label>Password</label>
            <input type="password" ref={passwordRef} required minLength="8" />
            <label>Password Confirmation</label>
            <input type="password" ref={passwordConfRef} required />
            <button disabled={loading} type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div>
        Already have an account? <Link to="/login">Log in.</Link>
      </div>
    </>
  );
}
