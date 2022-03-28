import Header from "../Header";
import { Container } from "../LoggedLayout/styles";

const LoggedLayout = ({ children }) => {
  return (
    <>
      <Header logged={false} />
      <Container>{children}</Container>
    </>
  );
};

export default LoggedLayout;
