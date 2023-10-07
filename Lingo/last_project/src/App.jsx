import { ModalProviter } from "./context/modal";
import Home from "./pages/Home";
import Map from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ModalProviter>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </BrowserRouter>
      </ModalProviter>
    </>
  );
}

export default App;
