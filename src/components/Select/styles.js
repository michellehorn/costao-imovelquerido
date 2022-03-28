import styled from "styled-components";
import { colors, fontSize } from "../../theme";

const SelectInput = styled.select`
  background: transparent;
  background-color: transparent;
  border: none;
  border-bottom: 3px solid ${colors.primary};
  width: ${({ width }) => width || "100px"};
  color: ${(props) => props.color || colors.primary};
  font-size: ${fontSize.text};
  height: ${(props) => props.height || "48px"};
  display: ${(props) => (props.isFlex ? "flex" : "")};
  &:focus {
    outline: none;
  }
  margin-top: 5px;
`;

const OptionsInput = styled.option``;

export { SelectInput, OptionsInput };
