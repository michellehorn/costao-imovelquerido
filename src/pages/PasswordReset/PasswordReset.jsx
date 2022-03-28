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

const PasswordReset = () => {

  const token = localStorage.getItem("token");

  const handleSubmit = (e) => {
    const formData = new FormData(e.currentTarget);
    e.preventDefault();
    const obj = {};
    for (let [key, value] of formData.entries()) {
      obj[key] = value;
    }

    const { currentPassword, newPassword, confirmNewPassword } = obj;
    console.log(currentPassword);
    console.log(newPassword);
    console.log(confirmNewPassword);

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
      .then((res) => {
        console.log(res.status);
      })
      .catch((error) => {
        console.log(error);
        alert("erro ao definir a senha");
      });
  };

  return (
    <FlexItem margin="auto" isFlex width="400px">
      <form onSubmit={handleSubmit}>
        <SectionTitle color={colors.primary} align="left" weight={weight.bold}>
          Redefinição de senha
        </SectionTitle>
        <Text color={colors.primary} weight={weight.semibold}>
          Senha atual
        </Text>
        <Input
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
  );
};

export default PasswordReset;
