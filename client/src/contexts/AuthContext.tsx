import { useEffect, useState } from "react"; //useContext,
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function useAuthStatus() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const [currentUser, setCurrentUser] : any = useState(null)

  useEffect(() => {
    const auth = getAuth();
    console.log(auth);
    onAuthStateChanged(auth, (currentUser) => {
      console.log('user at auth hook',currentUser)
      if (currentUser) {
        setLoggedIn(true);
        setCurrentUser(currentUser);
      }
      setCheckingStatus(false);
    });
  }, []);
  return { currentUser, loggedIn, checkingStatus };
}
