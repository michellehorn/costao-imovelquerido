import styled from "styled-components";
import warningIconImg from "../../assets/icon_warning.svg";

const WarningIcon = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-image: url(${warningIconImg});
  background-size: contain;
  margin: ${(props) => props.margin};
  justify-content: "center";
`;

export { WarningIcon };
