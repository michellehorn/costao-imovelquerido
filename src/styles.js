import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import iconPdfImage from "./assets/icon_pdf.svg";
import logoWhiteImg from "./assets/Branco_Vertical.png";
import LogoYellowBlueImg from "./assets/Amarelo_Azul.png";
import { colors, fontSize, weight } from "./theme";

const GlobalStyle = createGlobalStyle`
    html {
      margin: 0!important;
      padding: 0!important;
      -webkit-print-color-adjust: exact;
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
  @media (max-width: 500px) {
    display: ${({ mDisplayN }) => mDisplayN && "none"};
  }
`;

const ButtonSubmit = styled.button`
  background-color: ${colors.secondary};
  color: ${colors.primary};
  height: ${(props) => props.height || "48px"};
  padding: ${({ padding }) => padding || "14px 32px"};
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
  @media (max-width: 500px) {
    display: none;
  }
`;

const DividerHorizontal = styled.div`
  border-bottom: 1px solid ${colors.gray};
  width: 238px;
  margin: auto;
  padding: ${(props) => props.padding};
`;

const FlexItem = styled.div`
  text-align: ${({ tAlign }) => tAlign};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  height: ${(props) => props.height};
  padding: ${({ padding }) => padding};
  min-height: ${({ minHeight }) => minHeight};
  justify-content: ${({ jFlex }) => jFlex && "center"};
  align-items: ${({ jFlex }) => jFlex && "center"};
  display: ${(props) => (props.flex ? "flex" : "block")};
  cursor: ${({ hasCursor }) => hasCursor && "pointer"};
  @media (max-width: 500px) {
    width: ${({ mWidth }) => mWidth || "340px"};
    margin: ${({ mMargin }) => mMargin};
  }
`;

const PdfIcon = styled.div`
  display: flex;
  width: ${(props) => props.width || "20px"};
  height: ${(props) => props.height || "20px"};
  background-image: url(${iconPdfImage});
  background-size: contain;
  margin-left: 10px;
`;

const Input = styled.input`
  background: transparent;
  background-color: transparent;
  border: none;
  border-bottom: 3px solid ${(props) => props.color || "white"};
  width: ${({ width }) => width || "400px"};
  color: ${(props) => props.color || colors.white};
  font-size: ${fontSize.text};
  height: ${(props) => props.height || "48px"};
  display: ${(props) => (props.isFlex ? "flex" : "")};
  &:focus {
    outline: none;
  }
  @media (max-width: 500px) {
    width: ${({ mWidth }) => mWidth || "200px"};
  }
`;

const Link = styled.a`
  color: ${colors.primary};
  cursor: ${({ noCursor }) => noCursor || "pointer"};
  display: block;
  font-weight: ${({ w }) => w || weight.bold};
  padding: ${(props) => props.pl};
  text-decoration: ${(props) => props.decoration};
`;

const LinkItem = styled.span`
  color: ${(props) => props.color || colors.secondary};
  display: ${(props) => (props.flex ? "flex" : "block")};
  padding-top: ${(props) => props.pt || "15px"};
  text-decoration: underline;
  font-family: "Montserrat", sans-serif;
  font-size: ${fontSize.text};
  font-weight: ${weight.regular};
  text-align: ${({ align }) => align || "right"};
  cursor: ${(props) => (props.hasCursor ? "pointer" : "")};
  @media (max-width: 500px) {
    padding-left: ${({ mPl }) => mPl};
  }
`;

const LogoWhite = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: transparent url(${logoWhiteImg}) no-repeat;
  background-size: contain;
  margin: ${(props) => props.margin};
  justify-content: "center";
  cursor: ${({ hasCursor }) => hasCursor && "pointer"};

  @media (max-width: 500px) {
    margin: 30px auto 0;
  }
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
  margin-top: ${({ mt }) => mt};
`;

const Table = styled.table`
  width: 100%;
  background-color: transparent;
  border-spacing: 0 1em;
`;

const TableBody = styled.tbody`
  background: transparent;
  text-align: left;
  display: block;
  padding: ${({ padding }) => padding};
  height: 100%;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const TableBodyItem = styled.td`
  color: ${({ color }) => color || colors.darkGray};
  width: ${(props) => props.width};
  border-bottom: ${(props) =>
    props.border ? `1px solid ${colors.gray}` : "none"};
  padding-bottom: ${(props) => props.border && "5px"};
  padding-right: ${({ pr }) => pr};
  font-weight: ${({ weight }) => weight};

  &:last-of-type {
    padding-left: .5em;
  }
`;

const TableHeader = styled.thead`
  text-align: left;
  display: block;
`;

const TableHeaderItem = styled.th`
  width: ${(props) => props.width};
  color: ${colors.darkGray};
  font-weight: ${weight.bold};
  padding-right: ${({ pr }) => pr};
  @media (max-width: 500px) {
    width: ${({ mWidth }) => mWidth};
    padding-right: 0;
  }
`;

const TableRow = styled.tr`
  width: 100px;
  margin-top: 40px;
  @media (max-width: 500px) {
    width: 100%;
    margin-top: 0;
  }
`;

const Text = styled.label`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size || fontSize.text};
  font-weight: ${(props) => props.weight};
  display: ${(props) => (props.inline ? "inline" : "block")};
  text-align: ${(props) => props.textAlign || "left"};
  margin-top: ${({ mt }) => mt || "20px"};
  margin-bottom: ${(props) => props.mb};
  padding: ${(props) => props.padding};
  @media (max-width: 500px) {
    padding: ${({ mP }) => mP};
  }
`;

const TextItem = styled.h5`
  color: ${({ color }) => color};
  font-weight: ${weight.medium};
`;

const Title = styled.h1`
  color: ${(props) => props.color};
  font-size: ${fontSize.title};
  margin-bottom: ${(props) => props.mb || "64px"};
  font-weight: ${(props) => props.weight};
  text-align: ${(props) => props.align};
  @media (max-width: 500px) {
    font-size: ${fontSize.label};
    text-align: center;
  }
`;

export {
  GlobalStyle,
  Aligner,
  ButtonSubmit,
  Divider,
  DividerHorizontal,
  FlexItem,
  Input,
  Link,
  LinkItem,
  LogoWhite,
  LogoYellowBlue,
  PdfIcon,
  SectionTitle,
  Table,
  TableBody,
  TableBodyItem,
  TableContainer,
  TableHeader,
  TableHeaderItem,
  TableRow,
  Text,
  TextItem,
  Title,
};
