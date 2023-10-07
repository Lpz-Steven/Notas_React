import React, { useState } from "react";
import Componente1 from "./Componente1";
import Componente2 from "./Componente2";
import Componente3 from "./Componente3";

const App = () => {
  const [componenteActivo, setComponenteActivo] = useState(null);

  const mostrarComponente = (nombreComponente) => {
    setComponenteActivo(nombreComponente);
  };

  return (
    <div>
      <h1>Botones para mostrar componentes hermanos</h1>
      <div>
        <button onClick={() => mostrarComponente("Componente1")}>
          Mostrar Componente 1
        </button>
        <button onClick={() => mostrarComponente("Componente2")}>
          Mostrar Componente 2
        </button>
        <button onClick={() => mostrarComponente("Componente3")}>
          Mostrar Componente 3
        </button>
      </div>
      <div>
        {componenteActivo === "Componente1" && <Componente1 />}
        {componenteActivo === "Componente2" && <Componente2 />}
        {componenteActivo === "Componente3" && <Componente3 />}
      </div>
    </div>
  );
};

export default App;
