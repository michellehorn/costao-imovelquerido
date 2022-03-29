import Header from "../Header";
import { Container } from "../LoggedLayout/styles";

const Layout = ({ children }) => {
  const logged = localStorage.getItem("token");
  const novaSenha = localStorage.getItem("novaSenha") === "true";

  return (
    <>
      <Header logged={logged && !novaSenha} />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
