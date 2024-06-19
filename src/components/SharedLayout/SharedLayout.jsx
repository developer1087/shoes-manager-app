import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

import "./SharedLayout.css";

const SharedLayout = () => {
  return (
    <main className="main-container">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default SharedLayout;
