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
}

export interface ProductWomanCart extends ProductWoman {
  image: string;
  quantity: number;
  gender?: string;
  price?: number;
}

export interface ProductsWomanData {
  products_woman: {
    enterizo: ProductWoman[];
  };
}

export interface ProductoCardProps {
  product: ProductWomanCart;
  registerSwiper: (swiper: SwiperClass) => void;
}

export type SwiperInstance = SwiperClass & {
  el: HTMLElement;
};
