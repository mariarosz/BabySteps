import { useEffect, useState, createContext } from "react"; //useContext,
import { getAuth, onAuthStateChanged } from "firebase/auth";

const BabyContext = createContext('')
const BabyDispatchContext = createContext({})

function BabyProvider({children}:{children: any}) {
  const [babyName, setBabyName] = useState('');
  const [babyBirth, setBabyBirth] = useState('');


  return (
    <BabyContext.Provider value={babyName}>
      <BabyDispatchContext.Provider value={setBabyName}>
        {children}
      </BabyDispatchContext.Provider>
    </BabyContext.Provider>
  );
}

export { BabyContext, BabyProvider, BabyDispatchContext };
