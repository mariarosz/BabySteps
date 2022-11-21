import { Outlet, Navigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import useAuthStatus from "../../contexts/AuthContext";

export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();
    if (checkingStatus) {
      return <Loader />;
      }
  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
}