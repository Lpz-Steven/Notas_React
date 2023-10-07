import { useState } from "react";

export const Contador = () => {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
};
