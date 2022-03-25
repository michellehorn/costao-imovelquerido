import { FooterContainer, FooterInfo } from "./styles";

const Footer = () => {
  return (
    <FooterContainer isLogged>
      <FooterInfo>
        Made with <span style={{ color: "red", fontSize: "10px" }}>❤️</span> by{" "}
        <a href="https://github.com/michellehorn">@michellehorn</a>.
      </FooterInfo>
    </FooterContainer>
  );
};

export default Footer;
