import { useEffect, useState } from "react";

const Reloj = () => {
  const [horaActual, setHoraActual] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setHoraActual(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Reloj</h2>
      <p>{horaActual.toLocaleTimeString()}</p>
    </div>
  );
};

export default Reloj;
