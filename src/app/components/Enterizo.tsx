// components/Enterizo.tsx
"use client";

import React from "react";
import Image from "next/image";
import { EnterizoData, ProductoCardProps } from "../types/enterizo";
import data from "../data/enterizo.json";
import styles from "../styles/index.module.scss";

// Componente para mostrar cada producto
const ProductoCard: React.FC<ProductoCardProps> = ({ product }) => {
  return (
    <article className={styles.producto_card}>
      <picture>
        <Image
          src={product.images[0]} // solo la primera imagen
          alt={product.title}
          width={350}
          height={400}
        />
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