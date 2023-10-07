import Home from "./pages/Home";
import Seccion1 from "./pages/Seccion1";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Seccion1" element={<Seccion1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
