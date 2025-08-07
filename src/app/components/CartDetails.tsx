'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/index.module.scss'
import { useCart } from '../context/CartContext'

const CartDetails: React.FC = () => {
  const { cart } = useCart()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0)

  return (
    <div className={styles.cartDetailsContainer}>
      {cart.length === 0 ? (
        <p className={styles.emptyMessage}>Tu carrito está vacío.</p>
      ) : (
        <>
          {cart.map((product, index) => (
            <div key={index} className={styles.cartItem}>
              <Image
                src={product.image}
                alt={product.title}
                width={80}
                height={80}
                className={styles.productImage}
              />
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productPrice}>Precio: ${product.price}</p>
                <p className={styles.productQuantity}>Cantidad: {product.quantity}</p>
                <p className={styles.productSubtotal}>
                  Subtotal: ${(product.price * product.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}

          <div className={styles.totalSection}>
            <h2>Total: ${total.toFixed(2)}</h2>
          </div>
        </>
      )}

      <Link href="/" className={styles.backLink}>
        ← Volver al inicio
      </Link>
    </div>
  )
}

export default CartDetails