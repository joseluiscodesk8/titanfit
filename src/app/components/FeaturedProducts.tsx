import React from "react";
import Image from "next/image";
import { Product } from "../types/featuringproducts";
import featuredProductsData from "../data/FeaturedProduct.json";
import styles from "../styles/index.module.scss";

const FeaturedProducts: React.FC = () => {
  const products: Product[] = featuredProductsData.map((product) => ({
    ...product,
    quantity: 0, // Add a default quantity value
  }));

  return (
    <div className={styles.featuredContainer}>
      <h1 className={styles.featuredTitle}>Featured</h1>
      <div className={styles.featured}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className={styles.productImage}
            />
            <h2 className={styles.productTitle}>{product.title}</h2>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.productPrice}>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
