import './App.css';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/" element={<PrivateRoute />}> */}
          <Route path="/" element={<Dashboard />} />
          {/* </Route> */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
