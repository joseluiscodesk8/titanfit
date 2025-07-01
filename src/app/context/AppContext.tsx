'use client';

import { ReactNode } from 'react';
import { CartProvider } from './CartContext';
import { ValueProvider } from './ValueContext';

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CartProvider>
      <ValueProvider>
        {children}
      </ValueProvider>
    </CartProvider>
  );
};
