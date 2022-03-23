import { Routes, Route } from "react-router-dom";
import { Footer, Header, Sidebar } from "./components";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
