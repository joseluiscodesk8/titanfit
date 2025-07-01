export interface FeaturedProduct {
  id: string;
  gender: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

export interface Product extends FeaturedProduct {
  quantity: number;
}
