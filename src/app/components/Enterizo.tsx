// components/Enterizo.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { EnterizoData, ProductoCardProps } from "../types/enterizo";
import data from "../data/enterizo.json";
import styles from "../styles/index.module.scss";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// Componente para mostrar cada producto
const ProductoCard: React.FC<ProductoCardProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  return (
    <article className={styles.producto_card}>
      {/* Swiper con efecto fade */}
      <picture>
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 3000, // cada 3s
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
      <div>
        <label htmlFor={`size-${product.id}`}></label>
        <select
          id={`size-${product.id}`}
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
      </div>

      {/* Selector de colores */}
      <div>
        <label htmlFor={`color-${product.id}`}></label>
        <select
          id={`color-${product.id}`}
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
      </div>
    </article>
  );
};

// Componente principal que consume el JSON
const Enterizo: React.FC = () => {
  const productos: EnterizoData = data;

  return (
    <section className={styles.productos_lista}>
      {productos.enterizo.map((item) => (
        <ProductoCard key={item.id} product={item} />
      ))}
    </section>
  );
};

export default Enterizo;