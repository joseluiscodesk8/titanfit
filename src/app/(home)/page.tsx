'use client'

import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useMyContext } from "../context/MyContext"; // importa tu contexto
import styles from '../styles/index.module.scss'; // importa el sass

const DynamicLogo = dynamic(() => import("../components/Logo"), { ssr: false });
const DynamicMenu = dynamic(() => import("../components/Menu"), { ssr: false });


const Home: NextPage = () => {
  const [showLogo, setShowLogo] = useState(false);
  const { value } = useMyContext(); // obtiene el estado del menú

  useEffect(() => {
    const lastShown = localStorage.getItem('lastLogoShown');
    const now = Date.now();

    if (!lastShown || now - parseInt(lastShown) > 24 * 60 * 60 * 1000) {
      setShowLogo(true);

      const timer = setTimeout(() => {
        setShowLogo(false);
        localStorage.setItem('lastLogoShown', Date.now().toString());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {showLogo ? (
          <DynamicLogo key="logo" />
        ) : (
          <>
            <DynamicMenu key="menu" />
            <h1 className={value === 'open' ? styles.blurText : ''}>
              Más que verte bien te sentirás bien 
              <br/>
              <strong>TitanFit</strong>
            </h1>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;