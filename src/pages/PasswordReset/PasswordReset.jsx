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
  const handleSubmit = (e) => {
    const formData = new FormData(e.currentTarget);
    e.preventDefault();
    const obj = {};
    for (let [key, value] of formData.entries()) {
      obj[key] = value;
    }
    console.log(obj);
    window.location.href = "/";
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
          name="newPassword"
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
