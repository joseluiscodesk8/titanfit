// components/ProductoCard.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import {  ProductWomanCart, ProductoCardProps } from "../types/products";

export default function ProductoCard({ product }: ProductoCardProps) {
  const { cart, addToCart } = useCart();

  // estados locales para talla y color (fallback vacío "")
  const [selectedSize, setSelectedSize] = useState<string>(product?.tallas?.[0] || "");
  const [selectedColor, setSelectedColor] = useState<string>(product?.colores?.[0] || "");

  const cartItem = cart.find((p) => p.id === product.id);

  const handleAddToCart = () => {
    const productToAdd: ProductWomanCart = {
      ...product,
      quantity: 1,
      size: selectedSize,
      color: selectedColor,
      price: Number(product.detal_price), // asegurar número
      image: product.images[0],
      gender: "woman",
    };
    addToCart(productToAdd);
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      {/* Imagen */}
      <Image
        src={product?.images[0]}
        alt={product?.title}
        width={200}
        height={200}
        className="rounded-md object-cover"
      />

      {/* Título */}
      <h3 className="text-lg font-bold mt-2">{product?.title}</h3>
      <p className="text-sm text-gray-600">{product?.description}</p>

      {/* Precios */}
      <p className="text-green-600 font-semibold">Precio Detal: ${product?.detal_price}</p>
      <p className="text-blue-600 font-semibold">Precio Mayoría: ${product?.majority_price}</p>

      {/* Select de tallas */}
      {product?.tallas && product?.tallas.length > 0 && (
        <div className="mt-2">
          <label className="block text-sm">Talla:</label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="border rounded px-2 py-1 mt-1"
          >
            {product?.tallas.map((talla) => (
              <option key={talla} value={talla}>
                {talla}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Select de colores */}
      {product?.colores && product?.colores.length > 0 && (
        <div className="mt-2">
          <label className="block text-sm">Color:</label>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="border rounded px-2 py-1 mt-1"
          >
            {product?.colores.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Botón agregar al carrito */}
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {cartItem ? "Añadir más" : "Añadir al carrito"}
      </button>
    </div>
  );
}
