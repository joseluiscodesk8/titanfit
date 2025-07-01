import Image from "next/image";
import { useCart } from "../context/CartContext";
import styles from "../styles/index.module.scss";
import products from "../data/products.json";
import { FeaturedProduct, Product } from "../types/products";

// ✅ convertir FeaturedProduct a Product, usando precio del JSON y quantity default
const convertToProduct = (featured: FeaturedProduct): Product => ({
  ...featured,
  quantity: 1,
});

const FeaturedProducts = () => {
  const { addToCart, removeFromCart, isInCart } = useCart();

  return (
    <section className={styles.featured}>
      {products.products.featured.map((product: FeaturedProduct, index: number) => {
        const fullProduct = convertToProduct(product);
        const inCart = isInCart(fullProduct);

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
              <button
                onClick={() =>
                  inCart ? removeFromCart(fullProduct) : addToCart(fullProduct)
                }
                className={styles.cartButton}
              >
                {inCart ? "Eliminar del carrito" : "Agregar al carrito"}
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default FeaturedProducts;