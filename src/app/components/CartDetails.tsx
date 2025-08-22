// components/CartDetail.tsx
"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";
import styles from "../styles/index.module.scss";

const CartDetail: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <p>No hay productos en el carrito</p>;
  }

  return (
    <section className={styles.cartDetail}>
      <h2>Carrito</h2>
      <ul>
        {cart.map((item) => (
          <li key={`${item.id}-${item.size}-${item.color}`}>
            <Image src={item.image} alt={item.title} width={80} height={100} />
            <div>
              <h4>{item.title}</h4>
              <p>Talla: {item.size}</p>
              <p>Color: {item.color}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: {item.price * item.quantity} COP</p>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CartDetail;