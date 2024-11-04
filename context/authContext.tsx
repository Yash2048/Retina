import React, {createContext, ReactNode, useState} from 'react';

const authContext = createContext<boolean>(false);

const AuthProvider = ({children}: {children: ReactNode}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return <authContext.Provider value={isLoggedIn}>{children}</authContext.Provider>;
};

export {AuthProvider, authContext};
