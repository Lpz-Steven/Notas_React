import { Link } from "react-router-dom";
import { LiveProvider } from "../context/LiveContext";

const Home = () => {
  return (
    <>
      <LiveProvider>
        <Link to={"/Seccion1"}>Seccion 1 introduccion </Link>
      </LiveProvider>
    </>
  );
};

export default Home;
