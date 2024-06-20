import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="links">
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">GALLERY PAGE</a>
          </li>
        </ul>
      </div>
      <div className="copyrights">
        <p>All Rights Reserved &copy;</p>
      </div>
      <div className="logo">
        <h2>SHOE SHOE</h2>
      </div>
    </div>
  );
};

export default Footer;
