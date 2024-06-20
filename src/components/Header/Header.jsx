import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <Link to="/">
          <h2>SHOE SHOE</h2>
        </Link>
      </div>
      <h3>Management App</h3>
      <div className="nav-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="galleryPage">Shoes Gallery</NavLink>
      </div>
    </div>
  );
};

export default Header;
