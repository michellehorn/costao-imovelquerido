import { ButtonSubmit } from "../../styles";
import { ModalBody, ModalContainer } from "./styles";
import { fetchFile } from "../../services/download-file";

function Modal({ closeModal, isOpen, data }) {
  const { title, text } = data;
  if (!isOpen) return null;
  const downloadFile = async () => {
    await fetchFile("aviso", data.id, data.arquivo);
  };

  if (data.flg_arquivo) {
    downloadFile();
  }

  return (
    <ModalContainer>
      <ModalBody>
        <h3>{title}</h3>
        <h5>{text}</h5>
        <div id="img-section"></div>
        <ButtonSubmit
          height="30px"
          padding="0 15px"
          onClick={() => closeModal(false)}
        >
          Fechar
        </ButtonSubmit>
      </ModalBody>
    </ModalContainer>
  );
}

export default Modal;
