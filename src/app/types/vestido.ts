// types/vestido.ts

export interface VestidoItem {
    id: string;
    ref: string;
    title: string;
    description: string;
    detal_price: string;
    majority_price: string;
    stock: number;
    sizes: string[];
    colors: string[];
    images: string[];
  }
  
  export interface VestidoData {
    vestido: VestidoItem[];
  }
  
  export interface VestidoCartItem extends VestidoItem {
    quantity: number;
    size: string;
    color: string;
    price: number;
    image: string;
  }
  
  export interface ProductoCardProps {
    product: VestidoItem;
  }
  