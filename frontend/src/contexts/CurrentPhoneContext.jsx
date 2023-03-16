import { createContext, useContext, useState, useMemo } from "react";

const CurrentPhoneContext = createContext();

export const useCurrentPhoneContext = () => useContext(CurrentPhoneContext);

function CurrentPhoneContextProvider({ children }) {
  const [ram, setRam] = useState([]);
  const [storage, setStorage] = useState([]);

  const phoneMemo = useMemo(
    () => ({ storage, setStorage, ram, setRam }, [storage, ram])
  );
  return (
    <CurrentPhoneContext.Provider value={phoneMemo}>
      {children}
    </CurrentPhoneContext.Provider>
  );
}

export default CurrentPhoneContextProvider;
