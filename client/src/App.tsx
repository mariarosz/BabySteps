
import './App.css';
import Signup from './components/SignUp/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChildView from './components/ChildView/ChildView';
// import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/" element={<PrivateRoute />}> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/baby/:name" element={<ChildView />} />


          {/* </Route> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
