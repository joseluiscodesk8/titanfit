'use client'

import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi'; 
import Image from 'next/image';
import styles from '../styles/index.module.scss'; 
import { useMyContext } from '../context/MyContext'; // importa tu contexto

export default function Menu() {
  const { value, setValue } = useMyContext(); // usamos el contexto

  const toggleMenu = () => {
    setValue(value === 'open' ? 'closed' : 'open');
  };

  return (
    <header className={styles.header}>
      <div className={styles.iconlogo}>
        <Image src="/sport.png" alt="Logo" width={50} height={50} />
      </div>

      <button onClick={toggleMenu} className={styles.menuButton}>
        {value === 'open' ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      <nav className={`${styles.nav} ${value === 'open' ? styles.navOpen : ''}`}>
        <ul className={styles.navList}>
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/about">Nosotros</Link></li>
          <li><Link href="/services">Servicios</Link></li>
          <li><Link href="/projects">Proyectos</Link></li>
          <li><Link href="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}
