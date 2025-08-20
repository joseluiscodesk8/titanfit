// types/products.ts
import type { Swiper as SwiperClass } from 'swiper';

export interface FeaturedProduct {
  id: string;
  gender: string;
  title: string;
  description: string;
  image: string;
  price: number;
  stock: number;
}

export interface Product extends FeaturedProduct {
  quantity: number;
  size?: string;
  color?: string;
}

export interface ProductWoman {
  id: string;
  ref: string;
  title: string;
  description: string;
  detal_price: string;
  majority_price: string;
  stock: number;
  images: string[];
  tallas?: string[];
  colores?: string[];
}

export interface ProductWomanCart extends Product, ProductWoman {
  image: string;   // puedes sobrescribirlo si necesitas
  size?: string;
  color?: string;
}

export interface ProductsWomanData {
  products_woman: {
    enterizo: ProductWoman[];
  };
}

export interface ProductoCardProps {
  product: ProductWoman;
}

export type SwiperInstance = SwiperClass & {
  el: HTMLElement;
};
