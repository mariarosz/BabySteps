import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './Navbar.css';

export function Navbar() {
  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Dashboard");
      } else {
        setPageState("Login");
      }
    });
  }, [auth]);
  function pathMatchRoute(route: string) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="header">
        <h1 onClick={() => navigate("/")}>Baby Steps</h1>
        <div>
          {/* make it so that if the user is logged in, the button says "Dashboard" and if they are not logged in, the button says "Login" and if they are on the login page, the button says "Sign out" */}
          <ul>
      <li
        className={`${
          (pathMatchRoute("/") || pathMatchRoute("/dashboard"))
      }`}
      onClick={() => navigate("/login")} >
          <button >Log In</button>
        </li>
        <li
        className={`${
          (pathMatchRoute("/signup"))
        }`}
      onClick={() => navigate("/signup")} >
          <button  >Sign Up</button>
      </li>
      </ul>
      </div>
    </div>
  );
}
