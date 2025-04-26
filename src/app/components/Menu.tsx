'use client'

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi'; 
import Image from 'next/image';
import styles from '../styles/index.module.scss'; // Importamos el SASS module

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/sport.png" alt="Logo" width={50} height={50} />
      </div>

      <button onClick={toggleMenu} className={styles.menuButton}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
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
