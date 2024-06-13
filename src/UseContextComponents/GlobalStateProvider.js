import React, { createContext, useState } from 'react';


const GlobalStateContext = createContext();


const GlobalStateProvider = ({ children }) => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  
  const openRegisterForm = () => setShowRegisterForm(true);
  const closeRegisterForm = () => setShowRegisterForm(false);

  return (
    <GlobalStateContext.Provider value={{ showRegisterForm, openRegisterForm, closeRegisterForm }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateContext, GlobalStateProvider };
