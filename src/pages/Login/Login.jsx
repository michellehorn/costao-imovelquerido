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

const Login = () => {
  return (
    <BackgroundCover>
      <Background>
        <FlexItem width="503px">
          <LogoWhite width="220px" height="225px" />
        </FlexItem>
        <FlexItem width="fit-content">
          <Divider />
        </FlexItem>
        <FlexItem margin="0 0 0 56px">
          <Title color={colors.white} align="left" weight={weight.bold}>
            Acesso proprietário
          </Title>
          <Text color={colors.white} weight={weight.semibold}>
            Seu e-mail*
          </Text>
          <Input name="login" isFlex />
          <Text color={colors.white} weight={weight.semibold}>
            Senha*
          </Text>
          <Input name="password" isFlex />
          <LinkItem>Esqueci minha senha</LinkItem>
          <ButtonSubmit>Entrar</ButtonSubmit>
        </FlexItem>
      </Background>
    </BackgroundCover>
  );
};

export default Login;
