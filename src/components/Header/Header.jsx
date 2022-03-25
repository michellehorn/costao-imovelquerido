import { Link } from "react-router-dom";
import HeaderStyle from './styles';

const Header = () => {
  return (
    <HeaderStyle>
      <span>This is the header</span>
      <Link to="/login">Login</Link>
    </HeaderStyle>
  );
};

export default Header;
