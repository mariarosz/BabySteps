import { useState, createContext } from "react"; //useContext,


type GlobalContextTypes = {
  babyName: string,
  babyBirth: string,
  setBabyName: React.Dispatch<React.SetStateAction<string>>,
  setBabyBirth: React.Dispatch<React.SetStateAction<string>>
}

const GlobalContext = createContext<GlobalContextTypes>({
  babyName: '',
  babyBirth: '',
  setBabyName: () => {},
  setBabyBirth: () => {}
})

export default GlobalContext;

export function GlobalContextProvider({children}:{children: any}) {
  const [babyName, setBabyName] = useState('');
  const [babyBirth, setBabyBirth] = useState('');

  const context = {
    babyName,
    babyBirth,
    setBabyName,
    setBabyBirth
  }

  return (
    <GlobalContext.Provider value={context}>
      {children}
    </GlobalContext.Provider>
  );
}

