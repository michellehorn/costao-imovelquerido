import { HeaderImage, HeaderStyle, ListIcon, ProfileIcon } from "./styles";
import { FlexItem, LogoWhite } from "../../styles";

const Header = () => {
  return (
    <HeaderImage>
      <HeaderStyle>
        <FlexItem flex height="100%" width="100%" margin="auto">
          <ListIcon />
          <ProfileIcon />
          <LogoWhite flex margin="auto" width="140px" height="140px" />
        </FlexItem>
      </HeaderStyle>
    </HeaderImage>
  );
};

export default Header;
