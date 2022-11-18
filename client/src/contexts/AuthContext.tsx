import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

interface AppContextInterface {
  currentUser: any,
  signup: Function,
  login: Function,
  logout: Function,
}

const AuthContext = React.createContext<AppContextInterface | null | any>(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState<AppContextInterface | null>(null);
  const [loading, setLoading] = useState(true);

  function signup(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email: string, password: string) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const AppContext: AppContextInterface = { currentUser, signup, login, logout };

  return (
    <AuthContext.Provider value={AppContext}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
