"use client";

import { NextPage } from "next";
import dynamic from "next/dynamic";

const DynamicMenu = dynamic(() => import("../components/Menu"));
// const DynamicProductos = dynamic(() => import("../components/WomanProducts"));
const DynamicButton = dynamic(() => import("../components/FloatingCartButton"));
const DynamicFooter = dynamic(() => import('../components/Footer'))

const Womanline: NextPage = () => {
  return (
    <>
      <DynamicMenu logoSrc="/sportwearwoman.png" width={40} height={50} />
      {/* <DynamicProductos /> */}
      <DynamicButton />
      <br />
      <h3>skate or die</h3>
      <DynamicFooter />
    </>
  );
};

export default Womanline;
