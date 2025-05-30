import Image from 'next/image';

import styles from '../styles/index.module.scss';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <h3>Atención al cliente</h3>
        <ul>
          <li>Centro de Ayuda</li>
          <li>Envíos</li>
          <li>Devoluciones</li>
          <li>Servicio de Reparaciones</li>
          <li>Guía de Cuidados</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h3>Información</h3>
        <ul>
          <li>Sobre Tatan Fit</li>
          <li>Industry</li>
          <li>Prensa</li>
          <li>Política de Privacidad</li>
          <li>Términos y Condiciones</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h3>Sigue a Tatin Fit</h3>
        <div className={styles.social}>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>

      <Image src={'/logo.png'} width={30} height={30} alt='icon_logo' />
    </footer>
  );
};

export default Footer;