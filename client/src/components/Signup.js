import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (passwordRef.current.value !== passwordConfRef.current.value) {
      return setError('Passwords do not match.');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to create an account.');
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
            <input type="password" ref={passwordRef} required />
            <label>Password Confirmation</label>
            <input type="password" ref={passwordConfRef} required />
            <button disabled={loading} type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div>Already have an account? Log in.</div>
    </>
  );
}
