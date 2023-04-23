import React from "react";
import "./Header.scss";
import logo from "../../assets/logo_kasa.png";
import NavBarLink from "./NavBarLink";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="hedaer_link">
          <NavBarLink />
        </div>
      </div>
    </>
  );
};

export default Header;
