import React, { useEffect, useState } from "react";

const Temporizador = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContador((prevContador) => prevContador + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Temporizador</h2>
      <p>{contador}</p>
    </div>
  );
};

export default Temporizador;
