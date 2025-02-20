import React, { useState } from "react";

const Contador: React.FC = () => {
  const [contador, setContador] = useState<number>(0); // Estado tipado

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
      <button onClick={() => setContador(contador - 1)}>Restar</button>
    </div>
  );
};

export default Contador;
