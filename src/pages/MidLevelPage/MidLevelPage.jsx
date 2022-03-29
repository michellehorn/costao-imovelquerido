import { useNavigate } from "react-router-dom";
import { FlexItem, LinkItem, Text } from "../../styles";
import { ImgRender } from "./styles";
import { colors } from "../../theme";
import backIcon from "../../assets/back_icon.svg";

function MidLevelPage({ backLink, items }) {
  const navigate = useNavigate();

  return (
    <>
      <LinkItem onClick={() => navigate(backLink)} hasCursor align="left" mPl="40px">
        <ImgRender width="30px" height="30px" src={backIcon} />
      </LinkItem>
      <FlexItem
        mWidth="100%"
        hasCursor
        flex
        width="100%"
        height="100%"
        minHeight="300px"
        jFlex
      >
        {items.map((item) => (
          <FlexItem padding="0 2em" tAlign="center">
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
}

export default MidLevelPage;
