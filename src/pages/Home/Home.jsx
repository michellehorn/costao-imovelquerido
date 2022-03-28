import { useContext } from "react";
import Announcements from "../Announcements";
import { AlertSection } from "./styles";
import { Text } from "../../styles";
import { colors, fontSize, weight } from "../../theme";

const Home = () => {
  const name = localStorage.getItem("name");

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
        {name}.
      </Text>
      <AlertSection>
        <Announcements />
      </AlertSection>
    </>
  );
};

export default Home;
