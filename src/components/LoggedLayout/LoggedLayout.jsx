import React, { useState, useEffect } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

const LoggedLayout = ({ title, children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  document.title = `Portal do Proprietário | ${title}`;
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <>
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
      />
      <Header logged onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
      <Container>{children}</Container>
    </>
  );
};

export default LoggedLayout;
