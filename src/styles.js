import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import logoWhiteImg from "./assets/costao_logo_branca.svg";
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

const ButtonSubmit = styled.button`
  background-color: ${colors.secondary};
  color: ${colors.primary};
  height: 48px;
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
  border-bottom: 3px solid white;
  width: 400px;
  color: ${colors.white};
  font-size: ${fontSize.text};
  height: 48px;
  display: ${(props) => (props.isFlex ? "flex" : "")};
  &:focus {
    outline: none;
  }
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

const LogoWhite = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: url(${logoWhiteImg}) no-repeat;
  background-size: contain;
  margin: ${(props) => props.margin};
  justify-content: "center";
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
  text-align: left;
  margin-top: 20px;
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
  ButtonSubmit,
  Divider,
  FlexItem,
  Input,
  Text,
  LinkItem,
  LogoWhite,
  SectionTitle,
  Title,
};
