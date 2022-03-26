import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PasswordReset from "./pages/PasswordReset";
import LoginPage from "./pages/LoginPage";
import { GlobalStyle } from "./styles";
import UserContext, { UserContextProvider } from "./context/UserContext";
import { LoggedLayout } from "./components/";
import "./index.css";

function App() {
  const { state } = useContext(UserContext);
  console.log(state);

  return (
    <>
      <GlobalStyle />
      <UserContextProvider>
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
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
