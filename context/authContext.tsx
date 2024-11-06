import React, {createContext, ReactNode, useState, useContext} from 'react';

interface AuthContextProps {
  isLoggedIn: boolean;
  login: () => void;
}
const authContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({children}: {children: ReactNode}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const login = () => {
    setIsLoggedIn(true);
  };

  return <authContext.Provider value={{isLoggedIn, login}}>{children}</authContext.Provider>;
};

const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export {AuthProvider, useAuth};
