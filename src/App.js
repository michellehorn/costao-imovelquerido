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

function App() {
  const { state } = useContext(UserContext);
  const novaSenha = localStorage.getItem("novaSenha");
  console.log(novaSenha === true)
  console.log(novaSenha === 'true')

  return (
    <>
      <GlobalStyle />
      <UserContextProvider value={{ ...state }}>
        <Routes>
          <Route path="/login" element={<LoginPage  title="Login "/>} />
          <Route
            path="/"
            element={
              <LoggedLayout title="Home">
                <Home />
              </LoggedLayout>
            }
          />
          <Route
            path="/change-password"
            element={
              <>
                {novaSenha === 'true' ? (
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
              <LoggedLayout title="Documentos condominais">
                <Documents type="C" />
              </LoggedLayout>
            }
          />
          <Route
            path="/statement"
            element={
              <LoggedLayout  title="Extrato de locação">
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
