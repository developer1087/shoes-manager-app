import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <h2>SHOE SHOE</h2>
      </div>
      <div className="nav-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="galleryPage">Shoes Gallery</NavLink>
      </div>
    </div>
  );
};

export default Header;
