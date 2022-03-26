import { useContext } from "react";
import Announcements from "../Announcements";
import { AlertSection } from "./styles";
import { Text } from "../../styles";
import { colors, fontSize, weight } from "../../theme";
import UserContext from "../../context/UserContext";

const Home = () => {
  const { state } = useContext(UserContext);
  return (
    <>
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
        {state.name}.
      </Text>
      <AlertSection>
        <Announcements />
      </AlertSection>
    </>
  );
};

export default Home;
