import './App.css';
import { Signup } from './components/Signup';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="main-container">
        <Signup />
      </div>
    </AuthProvider>
  );
}

export default App;
