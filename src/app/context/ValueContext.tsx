'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type ValueContextType = {
  value: string;
  setValue: (newValue: string) => void;
};

const ValueContext = createContext<ValueContextType | undefined>(undefined);

export const ValueProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState('');

  return (
    <ValueContext.Provider value={{ value, setValue }}>
      {children}
    </ValueContext.Provider>
  );
};

export const useValue = () => {
  const context = useContext(ValueContext);
  if (!context) throw new Error('useValue debe ser usado dentro de ValueProvider');
  return context;
};
