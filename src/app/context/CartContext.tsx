'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  gender?: string;
  quantity: number;
  price: number;
  size?: string;
  color?: string;
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

  // Agregar producto (sin stock máximo)
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

  // Eliminar producto (disminuir cantidad o quitarlo si llega a 0)
  const removeFromCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id);
      if (existing) {
        if (existing.quantity > 1) {
          return prev.map(p =>
            p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
          );
        } else {
          return prev.filter(p => p.id !== product.id);
        }
      }
      return prev;
    });
  };

  const isInCart = (product: Product) => {
    return cart.some(p => p.id === product.id);
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
