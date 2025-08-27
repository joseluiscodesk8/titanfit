"use client";

import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";

const DynamicMenu = dynamic(() => import("../components/Menu"));
const DynamicEnterizo = dynamic(() => import("../components/Enterizo"));
const DynamicVestido = dynamic(() => import("../components/Vestido"));
const DynamicButton = dynamic(() => import("../components/FloatingCartButton"));
const DynamicFooter = dynamic(() => import("../components/Footer"));

const Womanline: NextPage = () => {
  const [activeComponent, setActiveComponent] = useState<"enterizo" | "vestido">("enterizo");

  return (
    <>
      <DynamicMenu logoSrc="/sportwearwoman.png" width={40} height={50} />

      {/* Botones para cambiar */}
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", margin: "20px 0" }}>
        <button
          onClick={() => setActiveComponent("enterizo")}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            backgroundColor: activeComponent === "enterizo" ? "#333" : "#eee",
            color: activeComponent === "enterizo" ? "#fff" : "#000",
          }}
        >
          Enterizos
        </button>
        <button
          onClick={() => setActiveComponent("vestido")}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            backgroundColor: activeComponent === "vestido" ? "#333" : "#eee",
            color: activeComponent === "vestido" ? "#fff" : "#000",
          }}
        >
          Vestidos
        </button>
      </div>

      {/* Render condicional */}
      {activeComponent === "enterizo" && <DynamicEnterizo />}
      {activeComponent === "vestido" && <DynamicVestido />}

      <DynamicButton />
      <br />
      <DynamicFooter />
    </>
  );
};

export default Womanline;
