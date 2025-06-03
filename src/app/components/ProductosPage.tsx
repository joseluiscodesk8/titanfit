import { motion } from 'framer-motion';
import { useValue, useCart } from "../context/MyContext";
import products from '../data/products.json';
import styles from "../styles/index.module.scss";
import Image from 'next/image';
import { Product } from '../types/products';

// 1. Define RawProduct type
type RawProduct = {
  id: string;
  gender: string;
  title: string;
  description: string;
  image: string;
};

const ProductoCard = ({ product }: { product: Product }) => {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const inCart = isInCart(product);

  return (
    <motion.div
      className={styles.producto_card}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={product.imagen}
        alt={product.nombre}
        width={300}
        height={300}
        priority={true}
      />
      <h3>{product.nombre}</h3>
      <p>{product.descripcion}</p>
      <p><strong>Precio: ${product.precio}</strong></p>
      <button
        onClick={() => inCart ? removeFromCart(product) : addToCart(product)}
        className={styles.cartButton}
      >
        {inCart ? "Eliminar del carrito" : "Agregar al carrito"}
      </button>
    </motion.div>
  );
};

const ProductosPage = () => {
  const { value } = useValue();

  // 2. Map from RawProduct to Product
  const productsList: Product[] = products.products.woman.map((product: RawProduct) => ({
    id: product.id,
    imagen: product.image,
    nombre: product.title,
    descripcion: product.description,
    precio: 0,
    title: product.title,
    description: product.description,
    image: product.image,
    gender: product.gender
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

export default ProductosPage;
// import { motion } from 'framer-motion';
// import { useValue, useCart } from "../context/MyContext"; 
// import products from '../data/products.json';
// import styles from "../styles/index.module.scss";
// import Image from 'next/image';
// import { Product } from '../types/products';

// const ProductoCard = ({ product }: { product: Product }) => {
//   const { addToCart, removeFromCart, isInCart } = useCart();
//   const inCart = isInCart(product);

//   return (
//     <motion.div
//       className={styles.producto_card}
//       initial={{ opacity: 0, y: 100 }} 
//       whileInView={{ opacity: 1, y: 0 }} 
//       exit={{ opacity: 0, y: -100 }}   
//       transition={{ duration: 0.5 }}   
//     >
//       <Image
//         src={product.imagen}
//         alt={product.nombre}
//         width={300}
//         height={300}
//         priority={true}
//       />
//       <h3>{product.nombre}</h3>
//       <p>{product.descripcion}</p>
//       <p><strong>Precio: ${product.precio}</strong></p>
//       <button 
//         onClick={() => inCart ? removeFromCart(product) : addToCart(product)}
//         className={styles.cartButton}
//       >
//         {inCart ? "Eliminar del carrito" : "Agregar al carrito"}
//       </button>
//     </motion.div>
//   );
// };

// const ProductosPage = () => {
//   const { value } = useValue();

//   return (
//     <div className={value === 'open' ? styles.blurText : ''}>
//       <section>
//         <h1>Productos</h1> 
//       </section>
//       <div className={styles.productos_lista}>
//         {products.products.woman.map((product: any) => ({
//           id: product.id || product.title,
//           imagen: product.image,
//           nombre: product.title,
//           descripcion: product.description,
//           precio: product.price || 0,
//           title: product.title,
//           description: product.description,
//           image: product.image,
//           gender: 'woman'
//         })).map((product: Product) => (
//           <ProductoCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductosPage;