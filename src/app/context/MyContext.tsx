'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Product = {
  title: string;
  description: string;
  image: string;
  gender: string;
};

type MyContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  isInCart: (product: Product) => boolean;
};

const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    if (!cart.some(p => p.title === product.title)) {
      setCart(prev => [...prev, product]);
    }
  };

  const removeFromCart = (product: Product) => {
    setCart(prev => prev.filter(p => p.title !== product.title));
  };

  const isInCart = (product: Product) => {
    return cart.some(p => p.title === product.title);
  };

  return (
    <MyContext.Provider value={{ cart, addToCart, removeFromCart, isInCart }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext debe ser usado dentro de un MyContextProvider');
  }
  return context;
};

// 'use client'

// import React, { createContext, useContext, useState, ReactNode } from 'react';

// type MyContextType = {
//   value: string;
//   setValue: (newValue: string) => void;
// };

// // Crear el Context
// const MyContext = createContext<MyContextType | undefined>(undefined);

// // Crear el Provider
// export const MyContextProvider = ({ children }: { children: ReactNode }) => {
//   const [value, setValue] = useState<string>('');

//   return (
//     <MyContext.Provider value={{ value, setValue }}>
//       {children}
//     </MyContext.Provider>
//   );
// };

// // Hook para usar el contexto
// export const useMyContext = () => {
//   const context = useContext(MyContext);
//   if (!context) {
//     throw new Error('useMyContext debe ser usado dentro de un MyContextProvider');
//   }
//   return context;
// };
