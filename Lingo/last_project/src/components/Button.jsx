import { useContext, useState } from "react";
import ModalContext from "../context/modal";

const Button = ({ children, clase }) => {
  const [isTRue, setIsTRue] = useState(false);
  const { handleModal } = useContext(ModalContext);

  const selectButton = (e) => {
    e.preventDefault();
    setIsTRue(!isTRue);
    handleModal(isTRue);
  };
  return (
    <button className={"btn " + clase} onClick={selectButton}>
      {children}
    </button>
  );
};

export default Button;
