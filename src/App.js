import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { GlobalStyle } from "./styles";
import { PrivateRoutes } from "./private-routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoutes>
              {" "}
              <Home />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default App;
