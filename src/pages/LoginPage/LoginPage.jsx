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
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useState, useContext } from "react";
import { Alert } from "../../components";
import UserContext from "../../context/UserContext";

const LoginPage = ({ title }) => {
  const navigate = useNavigate();
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState();
  const [alertMessage, setAlertMessage] = useState("");
  const { setState } = useContext(UserContext);

  document.title = `Portal do Proprietário | ${title}`;

  const handleSubmit = (e) => {
    const formData = new FormData(e.currentTarget);
    e.preventDefault();
    const obj = {};
    for (let [key, value] of formData.entries()) {
      obj[key] = value;
    }
    const { login, password } = obj;

    api
      .post("/login", {
        login: login,
        senha: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", res.data.nome);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("just_logged", true);
        const { novaSenha } = res.data;
        localStorage.setItem("novaSenha", novaSenha);
        setState({ flg_admin: res.data.flg_admin });
        setAlertType("success");
        setAlertOpen(true);

        if (novaSenha) {
          navigate("/change-password");
          setAlertMessage("Login efetuado com sucesso. Agora mude sua senha!");
        } else {
          setAlertMessage("Login efetuado com sucesso");
          navigate("/");
        }

        setTimeout(() => {
          setAlertOpen(false);
        }, 3000);
      })
      .catch(() => {
        e.preventDefault();
        setAlertType("error");
        setAlertMessage("Login ou senha incorretos. Tente novamente");
        setAlertOpen(true);
        setTimeout(() => {
          setAlertOpen(false);
        }, 3000);
      });
  };

  return (
    <BackgroundCover>
      {alertOpen && <Alert message={alertMessage} type={alertType} />}
      <Background>
        <FlexItem mWidth="100%" width="503px" flex>
          <LogoWhite width="220px" height="225px" margin="auto" />
        </FlexItem>
        <FlexItem width="fit-content">
          <Divider />
        </FlexItem>
        <FlexItem margin="0 0 0 56px" mMargin="0px">
          <form onSubmit={handleSubmit}>
            <Title color={colors.white} align="left" weight={weight.bold}>
              Acesso proprietário
            </Title>
            <Text color={colors.white} weight={weight.semibold}>
              Seu email*
            </Text>
            <Input mWidth="300px" name="login" isFlex />
            <Text color={colors.white} weight={weight.semibold}>
              Senha*
            </Text>
            <Input mWidth="300px" name="password" type="password" isFlex />
            <Link to="/forgot-password">
              <LinkItem onClick={() => navigate("/forgot-password")}>
                Esqueci minha senha
              </LinkItem>
            </Link>
            <ButtonSubmit type="submit">Entrar</ButtonSubmit>
          </form>
        </FlexItem>
      </Background>
    </BackgroundCover>
  );
};

export default LoginPage;
