import { motion } from 'framer-motion';
import { useValue } from "../context/ValueContext";
import { useCart } from "../context/CartContext";
import products from '../data/products.json';
import styles from "../styles/index.module.scss";
import Image from 'next/image';
import { Product, FeaturedProduct } from '../types/products';

const ProductoCard = ({ product }: { product: Product }) => {
  const { addToCart, removeFromCart, isInCart } = useCart();

  const cartProduct = {
    ...product,
    quantity: product.quantity ?? 1,
    price: product.price ?? 0,
  };

  const inCart = isInCart(cartProduct);

  return (
    <motion.div
      className={styles.producto_card}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
        priority={true}
      />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p><strong>Precio: ${product.price}</strong></p>
      <button
        onClick={() => inCart ? removeFromCart(cartProduct) : addToCart(cartProduct)}
        className={styles.cartButton}
      >
        {inCart ? "Eliminar del carrito" : "Agregar al carrito"}
      </button>
    </motion.div>
  );
};

const ManProductos = () => {
  const { value } = useValue();

  // Map FeaturedProduct[] to Product[]
  const productsList: Product[] = products.products.man.map((product: FeaturedProduct) => ({
    ...product,
    quantity: 1, // inicializa la cantidad
  }));

  return (
    <div className={value === 'open' ? styles.blurText : ''}>
      <section>
        <h1>Productos</h1>
      </section>
      <div className={styles.productos_lista}>
        {productsList.map((product) => (
          <ProductoCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ManProductos;