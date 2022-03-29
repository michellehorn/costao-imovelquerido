import styled from "styled-components";
import { colors } from "../../theme";

const AlertSection = styled.section`
  height: 130px;
  width: 100%;
  background: ${colors.gray};
  margin-top: 1em;
  overflow-x: auto;
  @media (max-width: 500px) {
    margin-top: .5em;
    height: 80px;
  }
`;

export { AlertSection };
