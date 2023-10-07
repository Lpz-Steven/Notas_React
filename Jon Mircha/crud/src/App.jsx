import ContactForm from "./components/ContactForm";
import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import { Modals } from "./components/Modals";

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <CrudApi></CrudApi>
      <hr />
      <Modals></Modals>
      <hr />
      <ContactForm></ContactForm>
      <hr />
      <CrudApp></CrudApp>
    </>
  );
}

export default App;
