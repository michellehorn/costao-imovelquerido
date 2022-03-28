import styled from "styled-components";
import { colors, fontSize } from "../../theme";

const AlertBox = styled.div`
  background-color: ${({ type }) =>
    type === "success" ? colors.green : colors.red};
  padding: 20px;
  color: ${colors.white};
  font-size: ${fontSize.subtext};
  text-align: center;
  position: absolute;
  right: 0;
  bottom: 20px;
`;

export { AlertBox };
