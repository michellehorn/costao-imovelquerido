import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>This is the header</h1>
      <Link to="/login">Login</Link>
    </header>
  );
};

export default Header;
