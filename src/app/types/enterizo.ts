// types/enterizo.ts
import type { Swiper as SwiperClass } from "swiper";

// Tipo base del producto (el que viene de tu JSON)
export interface Enterizo {
  id: string;
  ref: string;
  title: string;
  description: string;
  detal_price: string;    // lo dejamos string por el formato (ej: "61.000")
  majority_price: string;
  stock: number;
  sizes: string[];
  colors: string[];
  images: string[];
}

export interface EnterizoData {
  enterizo: Enterizo[];
}

// Tipo extendido para carrito (basado en Enterizo, con props adicionales)
export interface EnterizoCartItem extends Enterizo {
  quantity: number;
  size?: string;
  color?: string;
  price: number;   // numérico para cálculos
  image: string;   // la imagen elegida para carrito
  gender?: string; // opcional por si lo usas más adelante
}

// Props para la tarjeta
export interface ProductoCardProps {
  product: Enterizo;
}

export type SwiperInstance = SwiperClass & {
  el: HTMLElement;
};
