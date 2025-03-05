import React, { createContext, useContext, useEffect, useState } from "react";

import { getCurrentUser } from '../lib/appwrite';


const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);
export const GlobalProvider = ({ children }) => {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
            setIsLoggedIn(true);
          setUser(res);
        } else {
            setIsLoggedIn(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <GlobalContext.Provider value={{ user, setUser, isLoading, setIsLoading, isloggedIn, setIsLoggedIn }}>
      {children}
      

      </GlobalContext.Provider>
      
  );
};
export default GlobalProvider; 