import Image from "next/image";
import { useCart } from "../context/MyContext";
import styles from "../styles/index.module.scss";
import products from "../data/products.json";
import { FeaturedProduct } from "../types/products";


const FeaturedProducts = () => {
  const { addToCart, removeFromCart, isInCart } = useCart();

  return (
    <section className={styles.featured}>
      {products.products.featured.map((product: FeaturedProduct, index: number) => {
        const inCart = isInCart(product);
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
              <button 
                onClick={() => inCart ? removeFromCart(product) : addToCart(product)}
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