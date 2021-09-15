import React from "react";
import Tarjeta from "./Tarjeta";
const SeccionPrincipal = () => {
  return (
    <main>
      <div className="title">
        <h1>The Rick and Morty API</h1>
      </div>
      <div className="Tarjetero">
        <Tarjeta />
      </div>
    </main>
  );
};

export default SeccionPrincipal;
