import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PasswordReset from "./pages/PasswordReset";
import LoginPage from "./pages/LoginPage";
import { GlobalStyle } from "./styles";
import UserContext, { UserContextProvider } from "./context/UserContext";
import { LoggedLayout } from "./components";
import { Layout } from "./components";
import "./index.css";
import Documents from "./pages/Documents";
import Statement from "./pages/Statement/Statement";
import GenerateBill from "./pages/GenerateBill";
import ForgotPassword from "./pages/ForgotPassword";
import MidLevelPage from "./pages/MidLevelPage";

import billImg from "./assets/bill.svg";
import docCond from "./assets/doc_cond.svg";
import docLoc from "./assets/doc_loc.svg";
import docImage from "./assets/documents.svg";
import statementImg from "./assets/statement.svg";

function App() {
  const { state } = useContext(UserContext);
  const novaSenha = localStorage.getItem("novaSenha");

  const midLevelItems = [
    {
      id: "home",
      items: [
        { src: docCond, link: "/cond", text: "Condomínio" },
        { src: docLoc, link: "/loc", text: "Locação" },
      ],
    },
    {
      id: "cond",
      items: [
        {
          src: billImg,
          link: "/generate-bill",
          text: "Emitir 2ª via de boleto",
        },
        { src: docImage, link: "/cond-docs", text: "Documentos" },
      ],
    },
    {
      id: "loc",
      items: [
        { src: statementImg, link: "/statement", text: "Extrato de locação" },
        { src: docImage, link: "/loc-docs", text: "Documentos" },
      ],
    },
  ];

  return (
    <>
      <GlobalStyle />
      <UserContextProvider value={{ ...state }}>
        <Routes>
          <Route path="/login" element={<LoginPage title="Login " />} />
          <Route
            path="/"
            element={
              <LoggedLayout title="Home">
                <Home items={midLevelItems[0].items} />
              </LoggedLayout>
            }
          />
          <Route
            path="/cond"
            element={
              <LoggedLayout title="Condominio">
                <MidLevelPage
                  backLink="/"
                  text="Condomínio"
                  items={midLevelItems[1].items}
                />
              </LoggedLayout>
            }
          />
          <Route
            path="/loc"
            element={
              <LoggedLayout title="Locação">
                <MidLevelPage 
                  text="Locação"
                  backLink="/" items={midLevelItems[2].items} />
              </LoggedLayout>
            }
          />
          <Route
            path="/change-password"
            element={
              <>
                {novaSenha === "true" ? (
                  <Layout title="Redefinição de senha">
                    <PasswordReset />
                  </Layout>
                ) : (
                  <LoggedLayout title="Redefinição de senha">
                    <PasswordReset />
                  </LoggedLayout>
                )}
              </>
            }
          />
          <Route
            path="/forgot-password"
            exact
            element={
              <Layout title="Esqueci minha senha">
                <ForgotPassword />
              </Layout>
            }
          />
          <Route
            path="/generate-bill"
            element={
              <LoggedLayout title="Emitir 2 via de boleto">
                <GenerateBill type="bill" />
              </LoggedLayout>
            }
          />
          <Route
            path="/loc-docs"
            element={
              <LoggedLayout title="Documentos de locação">
                <Documents type="L" />
              </LoggedLayout>
            }
          />
          <Route
            path="/cond-docs"
            element={
              <LoggedLayout title="Documentos do condomínio">
                <Documents type="C" />
              </LoggedLayout>
            }
          />
          <Route
            path="/statement"
            element={
              <LoggedLayout title="Extrato de locação">
                <Statement />
              </LoggedLayout>
            }
          />
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
