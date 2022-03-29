import styled from "styled-components";
import { colors } from "../../theme";

const AlertSection = styled.section`
  height: 250px;
  width: 100%;
  background: ${colors.gray};
  margin-top: 1em;
  overflow-x: auto;
  @media (max-width: 500px) {
    margin-top: .5em;
    height: 200px;
  }
`;

export { AlertSection };
