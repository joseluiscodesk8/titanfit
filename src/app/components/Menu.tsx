// Menu.tsx
'use client'

import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi'; 
import Image from 'next/image';
import styles from '../styles/index.module.scss'; 
import { useValue } from '../context/MyContext';

interface MenuProps {
  showLogo?: boolean;
  logoSrc?: string; 
}

export default function Menu({ showLogo = true, logoSrc = "/sport.png" }: MenuProps) {
  const { value, setValue } = useValue();

  const toggleMenu = () => {
    setValue(value === 'open' ? 'closed' : 'open');
  };

  return (
    <header className={styles.header}>
      {showLogo && (
        <div className={styles.iconlogo}>
          <Image src={logoSrc} alt="Logo" width={50} height={50} />
        </div>
      )}

      <button onClick={toggleMenu} className={styles.menuButton}>
        {value === 'open' ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      <nav className={`${styles.nav} ${value === 'open' ? styles.navOpen : ''}`}>
        <ul className={styles.navList}>
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/womanline">Woman Line</Link></li>
          <li><Link href="/manline">Man Line</Link></li>
          <li><Link href="/projects">Proyectos</Link></li>
          <li><Link href="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}
