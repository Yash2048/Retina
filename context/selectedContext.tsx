import React, {createContext, ReactNode, useState, useContext} from 'react';

// Define the shape of the context value
interface SelectContextProps {
  isSelected: boolean;
  selectActive: () => void;
}

// Create the context with an undefined initial value
const selectContext = createContext<SelectContextProps | undefined>(undefined);

const SelectProvider = ({children}: {children: ReactNode}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const selectActive = () => {
    setIsSelected(prevState => !prevState);
  };

  return <selectContext.Provider value={{isSelected, selectActive}}>{children}</selectContext.Provider>;
};

const useSelect = () => {
  const context = useContext(selectContext);
  if (!context) {
    throw new Error('useSelect must be used within a SelectProvider');
  }
  return context;
};

export {SelectProvider, useSelect};
