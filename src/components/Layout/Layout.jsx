import Header from "../Header";
import { Container } from "../LoggedLayout/styles";

const Layout = ({ title, children }) => {
  const logged = localStorage.getItem("token");
  const novaSenha = localStorage.getItem("novaSenha") === "true";

  document.title = `Portal do Proprietário | ${title}`;

  return (
    <>
      <Header logged={logged && !novaSenha} />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
