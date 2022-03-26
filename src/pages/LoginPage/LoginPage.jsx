import {
  ButtonSubmit,
  Divider,
  FlexItem,
  Input,
  LinkItem,
  LogoWhite,
  Title,
  Text,
} from "../../styles";
import { Background, BackgroundCover } from "./styles";
import { colors, weight } from "../../theme";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const LoginPage = () => {
  const { setState } = useContext(UserContext);

  const handleSubmit = (e) => {
    const formData = new FormData(e.currentTarget);
    e.preventDefault();
    const obj = {};
    for (let [key, value] of formData.entries()) {
      obj[key] = value;
    }
    setState({ ...obj });
    window.location.href = "/";
  };

  return (
    <BackgroundCover>
      <Background>
        <FlexItem width="503px" flex>
          <LogoWhite width="220px" height="225px" margin="auto" />
        </FlexItem>
        <FlexItem width="fit-content">
          <Divider />
        </FlexItem>
        <FlexItem margin="0 0 0 56px">
          <form onSubmit={handleSubmit}>
            <Title color={colors.white} align="left" weight={weight.bold}>
              Acesso proprietário
            </Title>
            <Text color={colors.white} weight={weight.semibold}>
              Seu e-mail*
            </Text>
            <Input name="email" isFlex />
            <Text color={colors.white} weight={weight.semibold}>
              Senha*
            </Text>
            <Input name="password" type="password" isFlex />
            <Link to="/forgot-password">
              <LinkItem>Esqueci minha senha</LinkItem>
            </Link>
            <ButtonSubmit type="submit">Entrar</ButtonSubmit>
          </form>
        </FlexItem>
      </Background>
    </BackgroundCover>
  );
};

export default LoginPage;
