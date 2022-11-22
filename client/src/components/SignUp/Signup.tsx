import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../../contexts/OAuth";
import { FieldValue } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from '../../firebase';
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import img2 from '../../assets/img/step_img_placeholder2.png';
import './Signup.css';
import React from "react";

type FormDataType = {
  email: string,
  password?: string,
  name: string,
  timestamp?: FieldValue,
}

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const navigate = useNavigate();
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = password && await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      auth.currentUser && updateProfile(auth.currentUser, {
        displayName: name,
      });
      const user = userCredential && userCredential.user;
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      user && await setDoc(doc(db, "users", user.uid), formDataCopy);
      navigate("/dashboard");
    } catch (error) {
      toast.error("Something went wrong with the registration");
    }
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
            {/* <img id="signup-img" src={img2} alt="img" /> */}
            <div className="step-content">
              <h1>First self-eaten meal</h1>
            </div>
          </div>
        </div>
        <div className="signup">
          <h1>Signup</h1>
          <div>
        <form onSubmit={onSubmit}>
            <input
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Full name"
            />
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
            />
            <div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div>
              <p id="link" >
                Have a account?
                <Link
                  to="/login"
                > Login
                </Link>
              </p>
            </div>
            <button type="submit">
              Signup
            </button>
            <div>
              <p> OR </p>
            </div>
            <OAuth />
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}
