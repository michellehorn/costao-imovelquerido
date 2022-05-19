import Announcements from "../Announcements";
import { AlertSection } from "./styles";
import { FlexItem, Text } from "../../styles";
import { colors, fontSize, weight } from "../../theme";
import { useEffect, useState, useContext } from "react";
import { Alert } from "../../components";
import { ImgRender } from "../../pages/MidLevelPage/styles";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";

const Home = ({ items }) => {
  const name = localStorage.getItem("name");
  const justLogged = localStorage.getItem("just_logged");
  const { state, setState } = useContext(UserContext);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState();
  const [alertMessage, setAlertMessage] = useState("");

  const navigate = useNavigate();

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

  useEffect(() => {
    setState({...state, breadcrumb: null });
  }, [state, setState]);

  return (
    <>
      {alertOpen && <Alert message={alertMessage} type={alertType} />}
      <Text
        size={fontSize.text}
        weight={weight.bold}
        inline
        color={colors.primary}
        mP="0 10px"
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
      <FlexItem
        hasCursor
        flex
        mWidth="100%"
        width="100%"
        height="100%"
        minHeight="200px"
        jFlex
      >
        {items.map((item) => (
          <FlexItem width="100%" mWidth="100%" padding="0 2em" tAlign="center ">
            <ImgRender
              key={item.link}
              alt={item.link}
              onClick={() => navigate(item.link)}
              src={item.src}
            />
            <Text textAlign="center" color={colors.primary}>
              {item.text}
            </Text>
          </FlexItem>
        ))}
      </FlexItem>
    </>
  );
};

export default Home;
