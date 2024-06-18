import React from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";

const HomePage = () => {
  return (
    <main className="main-container">
      <div className="inner-container">
        <Link to="/galleryPage">
          <button>SHOW ALL SHOES</button>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
