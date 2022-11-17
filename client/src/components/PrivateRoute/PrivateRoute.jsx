import React from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export function PrivateRoute() {
  const { currentUser } = useAuth();

  // return (
  //   <Route
  //     {...rest}
  //     render={(props) => {
  //       return currentUser ? (
  //         <Component {...props} />
  //       ) : (
  //         <Navigate to="/login" />
  //       );
  //     }}
  //   ></Route>
  const navigate = useNavigate();
  if (!currentUser) navigate('/signup');
  // console.log(currentUser);
  return <Outlet />;
}
