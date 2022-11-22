import React, { useEffect, useState, useContext } from "react";
import './App.css';
import Signup from './components/SignUp/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Loader from "./components/Loader/Loader";
import ChildView from './components/ChildView/ChildView';
import { AddBaby } from "./components/AddBaby/AddBaby";
import { GlobalContextProvider } from "./contexts/GlobalContext";
import Timeline from "./components/Timeline/Timeline";

const App = () => {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(false), 4000);
    return () => {
      clearTimeout(timer);
    };
  }, []);



  return (
    <>
    <BrowserRouter>
    {loaded ? (
        <Loader />
      ) : (
        <GlobalContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/:name" element={<ChildView />} />
          <Route path="/addbaby" element={<AddBaby />} />
        </Routes>
        </GlobalContextProvider>
      )}
    </BrowserRouter>
    </>
  );
}

export default App;
