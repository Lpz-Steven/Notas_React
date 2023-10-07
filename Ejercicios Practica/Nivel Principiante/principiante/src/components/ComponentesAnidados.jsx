import { Blue } from "./colores/Blue";
import { Green } from "./colores/Green";
import { Red } from "./colores/Red";

const ComponentesAnidados = () => {
  return (
    <div>
      <ul>
        <li>
          <Red />
        </li>
        <li>
          <Green />
        </li>
        <li>
          <Blue />
        </li>
      </ul>
    </div>
  );
};

export default ComponentesAnidados;
