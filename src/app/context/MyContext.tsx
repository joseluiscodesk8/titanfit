'use client'

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from 'react';

//
// --- 1. TYPES ---
//

type Product = {
  title: string;
  description: string;
  image: string;
  gender: string;
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  isInCart: (product: Product) => boolean;
};

type ValueContextType = {
  value: string;
  setValue: (newValue: string) => void;
};

//
// --- 2. CONTEXTS ---
//

const CartContext = createContext<CartContextType | undefined>(undefined);
const ValueContext = createContext<ValueContextType | undefined>(undefined);

//
// --- 3. PROVIDERS ---
//

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [value, setValue] = useState('');

  // ✅ Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (error) {
        console.error('Error parsing cart from localStorage', error);
      }
    }
  }, []);

  // ✅ Save cart to localStorage when cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

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
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart }}>
      <ValueContext.Provider value={{ value, setValue }}>
        {children}
      </ValueContext.Provider>
    </CartContext.Provider>
  );
};

//
// --- 4. CUSTOM HOOKS ---
//

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart debe ser usado dentro de AppContextProvider');
  return context;
};

export const useValue = () => {
  const context = useContext(ValueContext);
  if (!context) throw new Error('useValue debe ser usado dentro de AppContextProvider');
  return context;
};