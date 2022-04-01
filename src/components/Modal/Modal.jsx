import { ButtonSubmit } from "../../styles";
import { ModalBody, ModalContainer } from "./styles";

function Modal({ closeModal, isOpen, data }) {
  const { title, text } = data;
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalBody>
          
        <h3>{title}</h3>
        <h5>{text}</h5>
        <ButtonSubmit height="30px" padding="0 15px" onClick={() => closeModal(false)}>Fechar</ButtonSubmit>
      </ModalBody>
    </ModalContainer>
  );
}

export default Modal;
