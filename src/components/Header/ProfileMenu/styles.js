import styled from "styled-components";
import { colors, weight, fontSize } from "../../../theme";

const Menu = styled.ul`
  height: 70px;
  width: 200px;
  background: ${colors.white};
  position: absolute;
  right: 25px;
  border-radius: 4px;
  top: 30px;
  padding: 5px 10px;
`;

const MenuItem = styled.a`
  color: ${colors.primary};
  font-weight: ${weight.bold};
  font-size: ${fontSize.text};
  display: block;
  text-decoration: none;
  padding: 8px 0px;
  border-bottom: 1px solid ${colors.gray};
  &:last-child {
    border-bottom: none;
  }
  cursor: pointer;
`;

const UserName = styled.h5`
  color: white;
  position: absolute;
  right: 80px;
  font-weight: ${weight.bold};
  @media (max-width: 500px) {
    display: none;
  }
`;


export { Menu, MenuItem, UserName };
