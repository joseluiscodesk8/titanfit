'use client';
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

const DynamicLogo = dynamic(() => import("../components/Logo"), { ssr: false });

const Home: NextPage = () => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showLogo ? (
          <DynamicLogo key="logo" />
        ) : (
          <main key="main">
            <h1>TITAN FIT</h1>
          </main>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;

