import React, { createContext, useContext, useState } from 'react';

const SelectionContext = createContext(); // 콘텍스트 생성

export const SelectionProvider = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState('baseball'); 

  return (
    <SelectionContext.Provider value={{ selectedMenu, setSelectedMenu }}>
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelection = () => {
  const context = useContext(SelectionContext);

  if (!context) {
    throw new Error('useSelection must be used within a SelectionProvider');
  }

  return context;
};
