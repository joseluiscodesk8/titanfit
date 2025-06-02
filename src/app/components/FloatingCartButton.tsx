'use client'

import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/index.module.scss';
import { useCart } from '../context/MyContext';

const FloatingCartButton: React.FC = () => {
  const controls = useAnimation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    if (!isDragging) {
      controls.start({
        y: [0, -5, 0, 5, 0],
        transition: {
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      });
    }
  }, [isDragging, controls]);

  const handleDragEnd = () => {
    setIsDragging(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      controls.start({
        x: 0,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 200,
          damping: 60,
        },
      }).then(() => {
        controls.start({
          y: [0, -5, 0, 5, 0],
          transition: {
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        });
      });
    }, 4000);
  };

  return (
    <motion.div
      className={styles.floatingCart}
      drag
      dragMomentum
      dragElastic={3}
      onDragEnd={handleDragEnd}
      animate={controls}
      style={{
        position: 'fixed',
        top: 40,
        right: 30,
      }}
    >
      <Link href="/cart" style={{ position: 'relative' }}>
        <FiShoppingCart size={30} />
        {cart.length > 0 && (
          <span className={styles.cartCount}>{cart.length}</span>
        )}
      </Link>
    </motion.div>
  );
};

export default FloatingCartButton;