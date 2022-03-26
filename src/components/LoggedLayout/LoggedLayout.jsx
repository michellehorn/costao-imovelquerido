import React, { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Container } from "./styles";

const LoggedLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
      />
      <Header onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default LoggedLayout;
