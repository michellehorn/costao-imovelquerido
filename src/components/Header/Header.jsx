import { HeaderImage, HeaderStyle, HeaderTitle, ListIcon } from "./styles";
import { FlexItem, LogoWhite } from "../../styles";
import ProfileMenu from "./ProfileMenu";
import { useNavigate } from "react-router-dom";

const Header = ({ logged, onMenuClick }) => {
  const navigate = useNavigate();

  return (
    <HeaderImage>
      <HeaderStyle>
        <FlexItem flex height="100%" width="100%" margin="auto">
          {logged && <ListIcon onClick={() => onMenuClick()} />}
          <div style={{ margin: "auto" }}>
            <LogoWhite
              onClick={() => navigate("/")}
              margin="auto"
              width="140px"
              height="140px"
              hasCursor
            />
            <HeaderTitle>Portal do Proprietário</HeaderTitle>
          </div>
          {logged && <ProfileMenu />}
        </FlexItem>
      </HeaderStyle>
    </HeaderImage>
  );
};

export default Header;
