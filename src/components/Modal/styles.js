import styled from "styled-components";
import { colors } from "../../theme";

const ModalContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  margin: auto;
  display: flex;
  top: 0%;

  #img-section {
    position: relative;
    height: fit-content;
    img {
      object-fit: contain;
      background-repeat: no-repeat;
    }
    @media (min-width: 1024px) {
      img {
        max-height: 100vh;
        height: fit-content;
        width: 100%;
      }
    }
  }
`;

const ModalBody = styled.div`
  margin: auto;
  box-shadow: 3px 4px 10px ${colors.darkGray};
  background-color: white;
  height: fit-content;
  padding: 20px;
`;

export { ModalBody, ModalContainer };
