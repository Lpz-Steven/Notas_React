import Modal from "./Modal";
import { useModal } from "../helpers/useModal";

export const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  return (
    <div>
      <h2>Modals</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola este es el contenido de mi modal 1</p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH0899f1I45jd_btMCfRFTBwUW9ZsmqzRWlVZRTtGzLe3KRHNCO3VVcNENwndTSJnRob8&usqp=CAU"
          alt=""
        />
      </Modal>
    </div>
  );
};
