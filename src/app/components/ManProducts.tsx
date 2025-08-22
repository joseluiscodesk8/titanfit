// 'use client';

// import { motion } from 'framer-motion';
// import { useValue } from "../context/ValueContext";
// import { useCart } from "../context/CartContext";
// import products from '../data/products.json';
// import styles from "../styles/index.module.scss";
// import Image from 'next/image';
// import { Product, FeaturedProduct } from '../types/enterizo';

// const ProductoCard = ({ product }: { product: Product }) => {
//   const { addToCart, removeFromCart, cart } = useCart();

//   const cartItem = cart.find((p) => p.id === product.id);
//   const currentQuantity = cartItem?.quantity || 0;
//   const maxReached = currentQuantity >= product.stock;

//   const handleAdd = () => {
//     if (!maxReached) {
//       addToCart({ ...product, quantity: 1 });
//     }
//   };

//   const handleRemove = () => {
//     removeFromCart({ ...product });
//   };

//   return (
//     <motion.div
//       className={styles.producto_card}
//       initial={{ opacity: 0, y: 100 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -100 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Image
//         src={product.image}
//         alt={product.title}
//         width={300}
//         height={300}
//         priority={true}
//       />
//       <h3>{product.title}</h3>
//       <p>{product.description}</p>
//       <p><strong>Precio: ${product.price}</strong></p>
//       <p>Stock disponible: {product.stock - currentQuantity}</p>
//       <p>Agregado al carrito: {currentQuantity}</p>

//       <div className={styles.buttonGroup}>
//         <button
//           onClick={handleAdd}
//           className={styles.cartButton}
//           disabled={maxReached}
//         >
//           {maxReached ? "Stock máximo alcanzado" : "Agregar al carrito"}
//         </button>

//         {currentQuantity > 0 && (
//           <button
//             onClick={handleRemove}
//             className={styles.removeButton}
//           >
//             Eliminar del carrito
//           </button>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// const ManProductos = () => {
//   const { value } = useValue();

//   const productsList: Product[] = products.products.man.map((product: FeaturedProduct) => ({
//     ...product,
//     quantity: 1,
//   }));

//   return (
//     <div className={value === 'open' ? styles.blurText : ''}>
//       <section>
//         <h1>Productos</h1>
//       </section>
//       <div className={styles.productos_lista}>
//         {productsList.map((product) => (
//           <ProductoCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ManProductos;