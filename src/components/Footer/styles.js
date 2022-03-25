import styled from "styled-components";
import { colors, fontSize } from "../../theme";

const FooterContainer = styled.div`
  height: 30px;
  font-size: ${fontSize.footNote};
  color: ${(props) => (props.isLogged ? colors.primary : colors.white)};
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const FooterInfo = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
`;
export { FooterContainer, FooterInfo };
