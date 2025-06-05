"use client";

import { NextPage } from "next";
import dynamic from "next/dynamic";

const DynamicMenu = dynamic(() => import("../components/Menu"));
const DynamicProductos = dynamic(() => import("../components/ManProducts"));
const DynamicButton = dynamic(() => import("../components/FloatingCartButton"));
const DynamicFooter = dynamic(() => import('../components/Footer'))

const manline: NextPage = () => {
  return (
    <>
      <DynamicMenu logoSrc="/sportwear.png" width={40} height={50} />
      <DynamicProductos />
      <DynamicButton />
      <br />
      <DynamicFooter />
    </>
  );
};

export default manline;
