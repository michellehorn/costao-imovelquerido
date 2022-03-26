import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import logoWhiteImg from "./assets/Branco_Vertical.png";
import LogoYellowBlueImg from "./assets/Amarelo_Azul.png";
import { colors, fontSize, weight } from "./theme";

const GlobalStyle = createGlobalStyle`
    html {
      margin: 0!important;
      padding: 0!important;
    }
    body {
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap');
      margin: 0!important;
      padding: 0!important;
      font-family: 'Montserrat', sans-serif;
    }
  `;

const Aligner = styled.div`
  text-align: ${(props) => props.direction};
  width: 100%;
  display: ${(props) => (props.flex ? "flex" : "")};
  justify-content: ${(props) => (props.flex ? "center" : "")};
  align-items: ${(props) => (props.flex ? "center" : "")};
`;

const ButtonSubmit = styled.button`
  background-color: ${colors.secondary};
  color: ${colors.primary};
  height: ${(props) => props.height || "48px"};
  padding: 14px 32px;
  border: none;
  font-size: ${fontSize.text};
  margin-top: 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Divider = styled.div`
  border-right: 6px solid white;
  height: 447px;
`;

const DividerHorizontal = styled.div`
  border-bottom: 1px solid ${colors.gray};
  width: 238px;
  margin: auto;
  padding: ${(props) => props.padding};
`;

const FlexItem = styled.div`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  height: ${(props) => props.height};
  display: ${(props) => (props.flex ? "flex" : "block")};
`;

const Input = styled.input`
  background: transparent;
  background-color: transparent;
  border: none;
  border-bottom: 3px solid ${(props) => props.color || "white"};
  width: 400px;
  color: ${(props) => props.color || colors.white};
  font-size: ${fontSize.text};
  height: ${(props) => props.height || "48px"};
  display: ${(props) => (props.isFlex ? "flex" : "")};
  &:focus {
    outline: none;
  }
`;

const Link = styled.a`
  color: ${colors.primary};
  cursor: pointer;
  display: block;
  font-weight: ${weight.bold};
  padding: ${(props) => props.pl};
  text-decoration: ${(props) => props.decoration};
`;

const LinkItem = styled.span`
  color: ${colors.secondary};
  display: block;
  padding-top: 15px;
  text-decoration: underline;
  font-family: "Montserrat", sans-serif;
  font-size: ${fontSize.text};
  font-weight: ${weight.regular};
  text-align: right;
`;

const LogoWhite = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: transparent url(${logoWhiteImg}) no-repeat;
  background-size: contain;
  margin: ${(props) => props.margin};
  justify-content: "center";
`;

const LogoYellowBlue = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: transparent url(${LogoYellowBlueImg}) no-repeat;
  background-size: contain;
  margin: ${(props) => props.margin};
  justify-content: "center";
  cursor: pointer;
`;

const SectionTitle = styled.h1`
  color: ${(props) => props.color};
  font-size: ${fontSize.titleSection};
  font-weight: ${(props) => props.weight};
`;

const Text = styled.label`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size || fontSize.text};
  font-weight: ${(props) => props.weight};
  display: ${(props) => (props.inline ? "inline" : "block")};
  text-align: ${(props) => props.textAlign || "left"};
  margin-top: 20px;
  margin-bottom: ${(props) => props.mb};
  padding: ${props => props.padding};
`;

const Title = styled.h1`
  color: ${(props) => props.color};
  font-size: ${fontSize.title};
  margin-bottom: ${(props) => props.mb || "64px"};
  font-weight: ${(props) => props.weight};
  text-align: ${(props) => props.align};
`;

export {
  GlobalStyle,
  Aligner,
  ButtonSubmit,
  Divider,
  DividerHorizontal,
  FlexItem,
  Input,
  Text,
  Link,
  LinkItem,
  LogoWhite,
  LogoYellowBlue,
  SectionTitle,
  Title,
};
