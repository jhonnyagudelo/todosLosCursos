import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const user = { isAuth };
  const login = () => {
    setIsAuth(true);
  };

  return (
    <AppContext.Provider value={{ user, login }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
