'use client';

import Image from "next/image";
import { useCart } from "../context/CartContext";
import styles from "../styles/index.module.scss";
import products from "../data/products.json";
import { FeaturedProduct, Product } from "../types/enterizo";

// Convertir FeaturedProduct a Product con cantidad por defecto
const convertToProduct = (featured: FeaturedProduct): Product => ({
  ...featured,
  quantity: 1,
});

const FeaturedProducts = () => {
  const { addToCart, removeFromCart, cart } = useCart();

  return (
    <section className={styles.featured}>
      {products.products.featured.map((product: FeaturedProduct, index: number) => {
        const fullProduct = convertToProduct(product);
        const cartItem = cart.find((p) => p.id === fullProduct.id);
        const currentQuantity = cartItem?.quantity || 0;
        const maxReached = currentQuantity >= fullProduct.stock;

        const handleAdd = () => {
          if (!maxReached) {
            addToCart({ ...fullProduct, quantity: 1 });
          }
        };

        const handleRemove = () => {
          removeFromCart(fullProduct);
        };

        return (
          <div className={styles.card} key={index}>
            <div className={styles.imageWrapper}>
              <Image
                src={product.image}
                alt={product.title}
                fill
                className={styles.image}
              />
            </div>

            <div className={styles.text}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <strong>${product.price.toFixed(2)}</strong>

              <p>Stock disponible: {product.stock - currentQuantity}</p>
              <p>Agregado al carrito: {currentQuantity}</p>

              <div className={styles.buttonGroup}>
                <button
                  onClick={handleAdd}
                  className={styles.cartButton}
                  disabled={maxReached}
                >
                  {maxReached ? "Stock máximo alcanzado" : "Agregar al carrito"}
                </button>

                {currentQuantity > 0 && (
                  <button
                    onClick={handleRemove}
                    className={styles.removeButton}
                  >
                    Eliminar del carrito
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default FeaturedProducts;