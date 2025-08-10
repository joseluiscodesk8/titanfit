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
  image: string;
  detal_price: string; // lo dejo como string porque en tu JSON es "61.000"
  majority_price: string; // Ojo: en el JSON pusiste "mayority_price", si lo quieres corregir, cámbialo aquí también
  stock: number;
}


// Para el carrito
export interface ProductWomanCart extends ProductWoman {
  quantity: number;
}


// types/products.ts

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
  image: string; // ✅ imagen seleccionada (la principal)
  quantity: number;
  gender?: string;
  price?: number;
}

export interface ProductsWomanData {
  products_woman: {
    enterizo: ProductWoman[]; // ✅ coincide con la clave del JSON
  };
}
