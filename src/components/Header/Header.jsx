import { HeaderImage, HeaderStyle, HeaderTitle, ListIcon } from "./styles";
import { FlexItem, LogoWhite } from "../../styles";
import ProfileMenu from "./ProfileMenu";

const Header = ({ onMenuClick }) => {
  return (
    <HeaderImage>
      <HeaderStyle>
        <FlexItem flex height="100%" width="100%" margin="auto">
          <ListIcon onClick={() => onMenuClick()} />
          <div style={{ margin: "auto" }}>
            <LogoWhite margin="auto" width="140px" height="140px" />
            <HeaderTitle>Portal do Proprietário</HeaderTitle>
          </div>
          <ProfileMenu />
        </FlexItem>
      </HeaderStyle>
    </HeaderImage>
  );
};

export default Header;
