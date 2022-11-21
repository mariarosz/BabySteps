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
      <h1>Baby Steps</h1>
      <li
        className={`${
          (pathMatchRoute("/login") || pathMatchRoute("/dashboard"))
      }`}
      onClick={() => navigate("/dashboard")}
      >
        {pageState}
        </li>
        <li
        className={`${
          (pathMatchRoute("/signup"))
        }`}
      onClick={() => navigate("/signup")}
      >
        Sign up
      </li>
    </div>
  );
}
