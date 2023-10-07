import { useState } from "react";
import QuestionComponent from "../components/questionComponent";
import Death from "../context/Death";

const vidaInicial = 5;

const Seccion1 = () => {
  const [vida, setVida] = useState(vidaInicial);

  const decrementLife = () => {
    setVida(vida - 1);
  };

  return (
    <div>
      <h1>Seccion 1</h1>
      <h3>{vida}</h3>
      {vida <= 0 ? (
        <Death />
      ) : (
        <QuestionComponent decrement={decrementLife}></QuestionComponent>
      )}
    </div>
  );
};

export default Seccion1;
