import React from "react";

import Search from "../search/";

import logo from "../../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <img src={logo} className="Header-logo" alt="Logo" />
      <Search />
    </header>
  );
}

export default Header;