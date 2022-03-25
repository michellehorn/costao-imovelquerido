import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { Container } from "./styles";

const LoggedLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default LoggedLayout;
