import styled from "styled-components";
import { colors } from "../../theme";

const SidebarContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: ${({ sidebarOpen }) => (sidebarOpen ? "inherit" : "none")};
  background: ${colors.primary};
  opacity: 0.4;
  z-index: 100;
`;

const SidebarArea = styled.aside`
  height: 100%;
  position: absolute;
  opacity: 1;
  width: 300px;
  z-index: 1000;
  background: ${colors.white};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
`;

export { SidebarArea, SidebarContainer };