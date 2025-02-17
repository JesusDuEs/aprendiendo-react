import React from "react";

interface SaludoProps{
    nombre : string;
}

const Saludo: React.FC<SaludoProps> = ({ nombre }) => {
    return <h2>Hola, {nombre}! Bienvenido a React con TypeScript 🎉</h2>;
  };

  export default Saludo;