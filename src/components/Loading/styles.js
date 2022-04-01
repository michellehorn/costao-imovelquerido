import styled from "styled-components";
import { colors } from "../../theme";

const Container = styled.main`
  position: fixed;
  background-color: ${colors.primary};
  opacity: 0.8;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100vw;
`;

const Loader = styled.div`
  border: 16px solid #f3f3f3; 
  border-top: 16px solid ${colors.secondary};
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 2s linear infinite;
  position: absolute;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { Container, Loader };
