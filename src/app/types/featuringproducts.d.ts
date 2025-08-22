export interface FeaturedProduct {
    id: string;
    title: string;
    description: string;
    price: number;
    stock: number;
    image: string;
  }
  
  export interface Product extends FeaturedProduct {
    quantity: number;
  }