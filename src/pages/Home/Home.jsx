import Announcements from "../Announcements";
import { AlertSection } from "./styles";
import { Text } from "../../styles";
import { colors, fontSize, weight } from "../../theme";
import { useEffect, useState } from "react";
import { Alert } from "../../components";

const Home = () => {
  const name = localStorage.getItem("name");
  const justLogged = localStorage.getItem("just_logged");

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState();
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (justLogged) {
      setAlertType("success");
      setAlertMessage("Login efetuado com sucesso");
      setAlertOpen(true);
      setTimeout(() => {
        setAlertOpen(false);
      }, 3000);
      localStorage.removeItem("just_logged");
    }
  }, [justLogged]);

  return (
    <>
      {alertOpen && <Alert message={alertMessage} type={alertType} />}
      <Text
        size={fontSize.text}
        weight={weight.bold}
        inline
        color={colors.primary}
      >
        Seja bem vindo(a),{" "}
      </Text>
      <Text
        size={fontSize.text}
        weight={weight.bold}
        inline
        color={colors.secondary}
      >
        {name}.
      </Text>
      <AlertSection>
        <Announcements />
      </AlertSection>
    </>
  );
};

export default Home;
