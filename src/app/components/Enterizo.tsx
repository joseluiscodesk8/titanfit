import { motion } from 'framer-motion';
import { useValue } from "../context/ValueContext";
import { useCart } from "../context/CartContext";
import enterizoData from '../data/enterizo.json';
import styles from "../styles/index.module.scss";
import Image from 'next/image';
import { ProductWoman, ProductWomanCart, ProductoCardProps, SwiperInstance } from '../types/products';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { useRef, useEffect } from 'react';

// Componente tarjeta
const ProductoCard = ({ product, registerSwiper }: ProductoCardProps) => {
  const { addToCart, removeFromCart, cart } = useCart();

  const cartItem = cart.find((p) => p.id === product.id);
  const currentQuantity = cartItem?.quantity || 0;
  const maxReached = currentQuantity >= product.stock;

  const handleAdd = () => {
    if (!maxReached) {
      addToCart({
        ...product,
        quantity: 1,
        gender: '',
        price: 0
      });
    }
  };

  const handleRemove = () => {
    removeFromCart({
      ...product,
      gender: '',
      price: 0
    });
  };

  return (
    <motion.div
      className={styles.producto_card}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <picture>
        <Swiper
          onSwiper={(swiper: SwiperClass) => registerSwiper(swiper)}
          grabCursor
          effect="creative"
          creativeEffect={{
            prev: { shadow: false, translate: ['-20%', 0, -1] },
            next: { translate: ['100%', 0, 0] },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop
          modules={[EffectCreative, Autoplay]}
          className={styles.producto_slider}
        >
          {product.images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={img}
                alt={`${product.title} - imagen ${idx + 1}`}
                width={300}
                height={300}
                priority={idx === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </picture>

      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p><strong>Precio Detal: ${product.detal_price}</strong></p>
      <p><strong>Precio Mayorista: ${product.majority_price}</strong></p>
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
    </motion.div>
  );
};

// Componente principal Enterizo
const Enterizo = () => {
  const { value } = useValue();
  const swiperInstances = useRef<SwiperInstance[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const swiper = swiperInstances.current.find(
            (s) => s.el === entry.target
          );
          if (swiper?.autoplay) {
            if (entry.isIntersecting) {
              swiper.autoplay.start();
            } else {
              swiper.autoplay.stop();
            }
          }
        });
      },
      { threshold: 0.2 }
    );
  
    swiperInstances.current.forEach((swiper) => {
      observer.observe(swiper.el);
    });
  
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const registerSwiper = (swiper: SwiperClass) => {
    swiperInstances.current.push(swiper as SwiperInstance);
  };

  const productsList: ProductWomanCart[] =
    enterizoData.enterizo.map((product: ProductWoman) => ({
      ...product,
      image: product.images[0],
      images: product.images,
      quantity: 1
    }));

  return (
    <div className={value === 'open' ? styles.blurText : ''}>
      <div className={styles.productos_lista}>
      <h1>Enterizos</h1>
        {productsList.map((product) => (
          <ProductoCard
            key={product.id}
            product={product}
            registerSwiper={registerSwiper}
          />
        ))}
      </div>
    </div>
  );
};

export default Enterizo;