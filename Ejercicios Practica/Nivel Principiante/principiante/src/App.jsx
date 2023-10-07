import "./App.css";
import MyComponent from "./components/ColorMagico";
import ColorMagico from "./components/ColorMagico";
import ComponentesAnidados from "./components/ComponentesAnidados";
import { Contador } from "./components/Contador";
import Desmontaje from "./components/Desmontaje";
import ListaTareas from "./components/ListaTareas";
import Reloj from "./components/Reloj";
import { Saludo } from "./components/Saludo";
import Temporizador from "./components/Temporizador";
import Renderizado from "./components/Renderizado";
import Render from "./components/Render";

function App() {
  return (
    <>
      <Saludo nombre="Steven"></Saludo>
      <hr />
      <Contador></Contador>
      <hr />
      <ComponentesAnidados></ComponentesAnidados>
      <hr />
      <ListaTareas></ListaTareas>
      <hr />
      <Desmontaje></Desmontaje>
      <hr />
      <Temporizador></Temporizador>
      <hr />
      <MyComponent />
      <hr />
      <Reloj></Reloj>
      <hr />
      <Renderizado></Renderizado>
      <hr />
      <Render></Render>
    </>
  );
}

export default App;
