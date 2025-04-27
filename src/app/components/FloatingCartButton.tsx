'use client'

import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from '../styles/index.module.scss';

const FloatingCartButton = () => {
  const controls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!isDragging) {
      controls.start({
        y: [0, -5, 0, 5, 0], // movimiento más corto (-5 a 5 en lugar de -10 a 10)
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      });
    } else {
      controls.stop();
    }
  }, [isDragging, controls]);

  const handleDragEnd = () => {
    setIsDragging(false);
    controls.start({
      top: 100,  // <-- Bajamos más el botón (antes era 20)
      right: 20,
      x: 0,
      y: 0,
      transition: { type: 'spring', stiffness: 300 },
    });
  };

  return (
    <motion.div
      className={styles.floatingCart}
      drag
      dragMomentum={false}
      dragElastic={0.2}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
      animate={controls}
      initial={{ top: 100, right: 20 }} // <-- También acá lo dejamos en 100
      style={{ position: 'fixed' }}
    >
      <Link href="/Cart">
        <FiShoppingCart size={30} />
      </Link>
    </motion.div>
  );
};

export default FloatingCartButton;
