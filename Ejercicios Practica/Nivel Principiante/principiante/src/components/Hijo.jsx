import { useEffect } from "react";

const Hijo = () => {
  useEffect(() => {
    console.log("Montaje");

    return () => {
      console.log("Componente Desmontado");
    };
  }, []);
  return <div>Hijo</div>;
};

export default Hijo;
