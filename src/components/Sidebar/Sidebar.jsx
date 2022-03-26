import { SidebarArea, SidebarContainer } from "./styles";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <SidebarContainer sidebarOpen={isOpen} onClick={() => toggleSidebar()} />
      <SidebarArea open={isOpen}>Test</SidebarArea>
    </>
  );
};

export default Sidebar;
