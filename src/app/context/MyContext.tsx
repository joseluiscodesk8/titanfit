'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

type MyContextType = {
  value: string;
  setValue: (newValue: string) => void;
};

// Crear el Context
const MyContext = createContext<MyContextType | undefined>(undefined);

// Crear el Provider
export const MyContextProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<string>('');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

// Hook para usar el contexto
export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext debe ser usado dentro de un MyContextProvider');
  }
  return context;
};
