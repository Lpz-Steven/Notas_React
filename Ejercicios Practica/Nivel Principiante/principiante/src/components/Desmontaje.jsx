import { useState } from "react";
import Hijo from "./Hijo";

const Desmontaje = () => {
  const [visible, setVisible] = useState(true);

  const desmontaje = () => {
    setVisible(!visible);
  };

  return (
    <>
      {visible ? (
        <>
          <Hijo /> <br />
        </>
      ) : null}
      <button onClick={desmontaje}>{visible ? "Desmontar" : "Montar"}</button>
    </>
  );
};

export default Desmontaje;
