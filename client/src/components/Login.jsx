import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
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
          <h1>Login In</h1>
          {error && <div>{error}</div>}
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" ref={emailRef} required />
            <label>Password</label>
            <input type="password" ref={passwordRef} required minLength="8" />

            <button disabled={loading} type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
      <div>
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}
