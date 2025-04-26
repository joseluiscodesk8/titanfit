'use client'

import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

const DynamicLogo = dynamic(() => import("../components/Logo"), { ssr: false });
const DynamicMenu = dynamic(() => import("../components/Menu"), { ssr: false });

const Home: NextPage = () => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem('lastLogoShown');
    const now = Date.now();

    if (!lastShown || now - parseInt(lastShown) > 24 * 60 * 60 * 1000) {
      // No se ha mostrado o pasaron más de 24 horas
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
          <DynamicMenu key="menu" />
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;


