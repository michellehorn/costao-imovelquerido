import styled from "styled-components";
import { colors } from "../../theme";

const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: auto;
  display: flex;
  top: 0%;

  #img-section {
    img { 
      object-fit: contain;
    }
  }
`;

const ModalBody = styled.div`
  margin: auto;
  box-shadow: 3px 4px 10px ${colors.darkGray};
  background-color: white;
  width: 300px;
  height: fit-content;
  padding: 20px;
`;

export { ModalBody, ModalContainer };
