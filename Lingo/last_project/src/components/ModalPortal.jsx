import ReactDOM from "react-dom";
import "./ModalPortal.css";
import { useContext } from "react";
import ModalContext from "../context/modal";
import BotonClose from "./BotonClose";

export const ModalPortal = ({ children }) => {
  const handleClickModal = (e) => e.stopPropagation();
  const { handleClose } = useContext(ModalContext);

  const handleClickPortal = () => {
    handleClose();
  };

  return ReactDOM.createPortal(
    <article className="modal-conatiner" onClick={handleClickPortal}>
      <div className={"modal-item"} onClick={handleClickModal}>
        <BotonClose funcForm={handleClickPortal} />
        {children}
      </div>
    </article>,
    document.getElementById("modal")
  );
};
