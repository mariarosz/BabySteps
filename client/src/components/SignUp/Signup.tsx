import React, { useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import img2 from '../../assets/img/step_img_placeholder2.webp';
import './Signup.css';
//write everything in typescript
export default function Signup() {
  const emailRef = React.useRef() as React.MutableRefObject<HTMLInputElement>
  const passwordRef = React.useRef() as React.MutableRefObject<HTMLInputElement>
  const passwordConfRef = React.useRef() as React.MutableRefObject<HTMLInputElement>
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
//check if password and password confirmation match in typescript
 if (passwordRef.current.valueOf !== passwordConfRef.current.valueOf) {
      return setError('Passwords do not match.');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.valueOf, passwordRef.current.valueOf);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }

  return (
    <div className="signup-container">
      <div className="logo-panel">
        <h1 id="logo">BabySteps</h1>
      </div>
      <div className="signup-content">
        <div className="baby-steps-info">
          <h3 id="hero">Your Baby development journal</h3>
          <div className="step-container">
            <img id="signup-img" src={img2} alt="img" />
            <div className="step-content">
              <h1>First self-eaten meal</h1>
            </div>
          </div>
        </div>
        <div className="signup">
          <h1>Signup</h1>
          {error && <div>{error}</div>}
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" ref={emailRef} required />
            <label>Password</label>
            <input type="password" ref={passwordRef} required  minLength= {8}/>
            <label>Password Confirmation</label>
            <input type="password" ref={passwordConfRef} required />
            <button disabled={loading} type="submit">
              Sign Up
            </button>
          </form>
          <div>
            <p id="link">
              Already have an account? <Link to="/login">Log in.</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
