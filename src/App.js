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

  return (
    <>
      <GlobalStyle />
      <UserContextProvider value={{ ...state }}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <LoggedLayout>
                <Home />
              </LoggedLayout>
            }
          />
          <Route
            path="/"
            element={
              <LoggedLayout>
                <Home />
              </LoggedLayout>
            }
          />
          <Route
            path="/change-password"
            element={
              <LoggedLayout>
                <PasswordReset />
              </LoggedLayout>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <Layout>
                <ForgotPassword />
              </Layout>
            }
          />
          <Route
            path="/generate-bill"
            element={
              <LoggedLayout>
                <GenerateBill type="bill" />
              </LoggedLayout>
            }
          />
          <Route
            path="/loc-docs"
            element={
              <LoggedLayout>
                <Documents type="L" />
              </LoggedLayout>
            }
          />
          <Route
            path="/cond-docs"
            element={
              <LoggedLayout>
                <Documents type="C" />
              </LoggedLayout>
            }
          />
          <Route
            path="/statement"
            element={
              <LoggedLayout>
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
