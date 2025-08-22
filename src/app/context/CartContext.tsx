// context/CartContext.tsx
'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { EnterizoCartItem } from '../types/enterizo';

type CartContextType = {
  cart: EnterizoCartItem[];
  addToCart: (product: EnterizoCartItem) => void;
  removeFromCart: (id: string) => void;
  isInCart: (id: string) => boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<EnterizoCartItem[]>([]);

  // Recuperar carrito desde localStorage
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

  // Guardar carrito en localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Agregar producto
  const addToCart = (product: EnterizoCartItem) => {
    setCart(prev => {
      const existing = prev.find(
        p =>
          p.id === product.id &&
          p.size === product.size &&
          p.color === product.color
      );
      if (existing) {
        return prev.map(p =>
          p.id === product.id && p.size === product.size && p.color === product.color
            ? { ...p, quantity: p.quantity + product.quantity }
            : p
        );
      } else {
        return [...prev, product];
      }
    });
  };

  // Eliminar producto
  const removeFromCart = (id: string) => {
    setCart(prev =>
      prev
        .map(p =>
          p.id === id
            ? { ...p, quantity: p.quantity - 1 } // restamos 1
            : p
        )
        .filter(p => p.quantity > 0) // si llega a 0, lo quitamos del carrito
    );
  };

  const isInCart = (id: string) => cart.some(p => p.id === id);

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