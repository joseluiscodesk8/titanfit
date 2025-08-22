"use client";

import { NextPage } from "next";
import dynamic from "next/dynamic";

const DynamicMenu = dynamic(() => import("../components/Menu"));
// const DynamicEnterizo = dynamic(() => import("../components/Enterizo"));
const DynamicButton = dynamic(() => import("../components/FloatingCartButton"));
const DynamicFooter = dynamic(() => import('../components/Footer'))

const Womanline: NextPage = () => {
  return (
    <>
      <DynamicMenu logoSrc="/sportwearwoman.png" width={40} height={50} />
      {/* <DynamicEnterizo /> */}
      <DynamicButton />
      <br />
      <DynamicFooter />
    </>
  );
};

export default Womanline;
