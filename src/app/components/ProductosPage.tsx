import { motion } from 'framer-motion';
import { useMyContext } from "../context/MyContext"; 
import productos from '../data/productos.json';
import styles from "../styles/index.module.scss";
import Image from 'next/image';

type Producto = {
  id: number;
  imagen: string;
  nombre: string;
  precio: number;
  descripcion: string;
};

const ProductoCard = ({ producto }: { producto: Producto }) => {
  return (
    <motion.div
      className={styles.producto_card}
      initial={{ opacity: 0, y: 100 }} // Comienza fuera de vista
      whileInView={{ opacity: 1, y: 0 }}  // Cuando entra en vista, aparece desde abajo
      exit={{ opacity: 0, y: -100 }}   // Cuando sale hacia arriba
      transition={{ duration: 0.5 }}    // Duración de la animación
    >
      <Image
        src={producto.imagen}
        alt={producto.nombre}
        width={300}
        height={300}
      />
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p><strong>Precio: ${producto.precio}</strong></p>
    </motion.div>
  );
};

const ProductosPage = () => {
  const { value } = useMyContext();

  return (
    <div className={value === 'open' ? styles.blurText : ''}>
      <h1>Productos</h1>
      <div className={styles.productos_lista}>
        {productos.map((producto: Producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default ProductosPage;