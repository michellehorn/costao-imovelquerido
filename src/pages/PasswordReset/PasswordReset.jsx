import { api } from "../../services/api";
import {
  Aligner,
  ButtonSubmit,
  FlexItem,
  Input,
  SectionTitle,
  Text,
} from "../../styles";
import { colors, weight } from "../../theme";
import { useState } from "react";
import { Alert } from "../../components";

const PasswordReset = () => {
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState();
  const [alertMessage, setAlertMessage] = useState("");
  const token = localStorage.getItem("token");

  const handleSubmit = (e) => {
    const formData = new FormData(e.currentTarget);
    e.preventDefault();
    const obj = {};
    for (let [key, value] of formData.entries()) {
      obj[key] = value;
    }

    const { currentPassword, newPassword, confirmNewPassword } = obj;

    api
      .put(
        "/senha",
        {
          senhaAtual: currentPassword,
          senhaNova: newPassword,
          senhaConfirmacao: confirmNewPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        setAlertType("success");
        setAlertMessage("Senha alterada com sucesso!");
        setAlertOpen(true);
        setTimeout(() => {
          setAlertOpen(false);
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        setAlertType("error");
        setAlertMessage(`Erro! ${error.message}`);
        setAlertOpen(true);
        setTimeout(() => {
          setAlertOpen(false);
        }, 3000);
      });
  };

  return (
    <>
      {alertOpen && <Alert message={alertMessage} type={alertType} />}
      <FlexItem margin="auto" isFlex width="400px">
        <form onSubmit={handleSubmit}>
          <SectionTitle
            color={colors.primary}
            align="left"
            weight={weight.bold}
          >
            Redefinição de senha
          </SectionTitle>
          <Text color={colors.primary} weight={weight.semibold}>
            Senha atual
          </Text>
          <Input
            mWidth="300px"
            height="30px"
            color={colors.primary}
            name="currentPassword"
            type="password"
            isFlex
          />
          <Text color={colors.primary} weight={weight.semibold}>
            Senha nova
          </Text>
          <Input
            mWidth="300px"
            height="30px"
            color={colors.primary}
            name="newPassword"
            type="password"
            isFlex
          />
          <Text color={colors.primary} weight={weight.semibold}>
            Confirme a nova senha
          </Text>
          <Input
            height="30px"
            mWidth="300px"
            color={colors.primary}
            name="confirmNewPassword"
            type="password"
            isFlex
          />
          <Aligner direction="center">
            <ButtonSubmit type="submit">Entrar</ButtonSubmit>
          </Aligner>
        </form>
      </FlexItem>
    </>
  );
};

export default PasswordReset;
