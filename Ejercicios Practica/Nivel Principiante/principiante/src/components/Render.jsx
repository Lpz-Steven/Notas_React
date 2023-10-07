import React, { useState } from "react";

const Padre = () => {
  const [mostrarHijo1, setMostrarHijo1] = useState(true);
  const [mostrarHijo2, setMostrarHijo2] = useState(false);

  const toggleHijos = () => {
    setMostrarHijo1(!mostrarHijo1);
    setMostrarHijo2(!mostrarHijo2);
  };

  return (
    <div>
      <h1>Componente Padre</h1>
      {mostrarHijo1 && <Hijo1 toggleHijos={toggleHijos} />}
      {mostrarHijo2 && <Hijo2 />}
    </div>
  );
};

const Hijo1 = ({ toggleHijos }) => {
  return (
    <div>
      <h2>Hijo 1</h2>
      <p>Este es el primer hijo.</p>
      <button onClick={toggleHijos}>Boton</button>
    </div>
  );
};

const Hijo2 = () => {
  return (
    <div>
      <h2>Hijo 2</h2>
      <p>Este es el segundo hijo.</p>
    </div>
  );
};

export default Padre;
