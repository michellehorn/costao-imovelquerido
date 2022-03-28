import { useContext, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PasswordReset from "./pages/PasswordReset";
import LoginPage from "./pages/LoginPage";
import { GlobalStyle } from "./styles";
import UserContext, { UserContextProvider } from "./context/UserContext";
import { LoggedLayout } from "./components/";
import "./index.css";
import Documents from "./pages/Documents";
import Statement from "./pages/Statement/Statement";

function App() {
  const { state } = useContext(UserContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [state, token, navigate]);
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
            path="/forgot-password"
            element={
              <LoggedLayout>
                <PasswordReset />
              </LoggedLayout>
            }
          />
          {/* <Route
            path="/generate-bill"
            element={
              <LoggedLayout>
                <Documents type="bill" />
              </LoggedLayout>
            }
          /> */}
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
