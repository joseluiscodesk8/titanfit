// components/Enterizo.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { EnterizoData, ProductoCardProps, EnterizoCartItem } from "../types/enterizo";
import data from "../data/enterizo.json";
import styles from "../styles/index.module.scss";
import { useCart } from "../context/CartContext";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const ProductoCard: React.FC<ProductoCardProps> = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState<string>("");
    const [selectedColor, setSelectedColor] = useState<string>("");
    const { addToCart, removeFromCart, isInCart } = useCart();
  
    const handleAddToCart = () => {
      if (!selectedSize || !selectedColor) {
        alert("Por favor selecciona talla y color");
        return;
      }
  
      const item: EnterizoCartItem = {
        ...product,
        quantity: 1,
        size: selectedSize,
        color: selectedColor,
        price: parseFloat(product.detal_price.replace(/\./g, "")),
        image: product.images[0],
      };
  
      addToCart(item);
    };
  
    const handleRemoveFromCart = () => {
      removeFromCart(product.id);
    };
  
    return (
      <article className={styles.producto_card}>
        <picture>
          <Swiper
            modules={[EffectFade, Autoplay]}
            effect="fade"
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className={styles.producto_slider}
          >
            {product.images.map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={img}
                  alt={`${product.title} ${index + 1}`}
                  width={350}
                  height={400}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </picture>
  
        <h3>{product.title}</h3>
        <p>{product.description}</p>
  
        <div>
          <p>
            <strong>Precio Detal:</strong> {product.detal_price} COP
          </p>
          <p>
            <strong>Precio Mayoría:</strong> {product.majority_price} COP
          </p>
        </div>
  
        {/* Selector de tallas */}
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          <option value="">Tallas</option>
          {product.sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
  
        {/* Selector de colores */}
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          <option value="">Colores</option>
          {product.colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
  
        <button onClick={handleAddToCart}>Agregar al carrito</button>
  
        {/* Botón eliminar solo si ya está en carrito */}
        {isInCart(product.id) && (
          <button onClick={handleRemoveFromCart}>Eliminar del carrito</button>
        )}
      </article>
    );
  };
  
// Componente principal
const Enterizo: React.FC = () => {
  const productos: EnterizoData = data;

  return (
    <section className={styles.productos_lista}>
        <h2>Enterizos</h2>
      {productos.enterizo.map((item) => (
        <ProductoCard key={item.id} product={item} />
      ))}
    </section>
  );
};

export default Enterizo;