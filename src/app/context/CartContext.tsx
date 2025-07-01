'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  gender: string;
  quantity: number;
  price: number;
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  isInCart: (product: Product) => boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

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

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
  setCart(prev => {
    const existing = prev.find(p => p.id === product.id);
    if (existing) {
      return prev.map(p =>
        p.id === product.id
          ? { ...p, quantity: p.quantity + product.quantity }
          : p
      );
    } else {
      return [...prev, product];
    }
  });
};


  const removeFromCart = (product: Product) => {
    setCart(prev => prev.filter(p => p.title !== product.title));
  };

  const isInCart = (product: Product) => {
    return cart.some(p => p.title === product.title);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart debe ser usado dentro de CartProvider');
  return context;
};
