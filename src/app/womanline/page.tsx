"use client";

import { NextPage } from "next";
import dynamic from "next/dynamic";

const DynamicMenu = dynamic(() => import("../components/Menu"), { ssr: false });
const DynamicProductos = dynamic(() => import("../components/ProductosPage"));
const DynamicButton = dynamic(() => import("../components/FloatingCartButton"));

const Womanline: NextPage = () => {
  return (
    <>
      <DynamicMenu logoSrc="/sportwearwoman.png"/>
      <DynamicProductos />
      <DynamicButton />
    </>
  );
};

export default Womanline;
