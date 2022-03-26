import { HeaderImage, HeaderStyle, ListIcon } from "./styles";
import { FlexItem, LogoWhite } from "../../styles";
import ProfileMenu from "./ProfileMenu";

const Header = ({ onMenuClick }) => {
  return (
    <HeaderImage>
      <HeaderStyle>
        <FlexItem flex height="100%" width="100%" margin="auto">
          <ProfileMenu />
          <ListIcon onClick={() => onMenuClick()}/>
          <LogoWhite flex margin="auto" width="140px" height="140px" />
        </FlexItem>
      </HeaderStyle>
    </HeaderImage>
  );
};

export default Header;
