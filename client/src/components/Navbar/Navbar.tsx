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
  function onLogout() {
    auth.signOut();
    navigate("/");
  }


  return (
    <div className="header">
        <h1 onClick={() => navigate("/")}>Baby Steps</h1>
        <div>
          <ul>
            {pathMatchRoute("/") ? (
              <>
                <li onClick={() => navigate("/login")}>
                  <button>Log In</button>
                  </li>
                <li onClick={() => navigate("/signup")}>
                  <button>Sign Up</button>
                  </li>
              </>
            ) : (
              <>
                <li onClick={() => navigate("/dashboard")}>
                  <button>Dashboard</button>
                </li>
                <li onClick={() => onLogout()}>
                  <button>Logout</button>
                  </li>
              </>
            )}
          </ul>
        </div>
    </div>
  );
}
