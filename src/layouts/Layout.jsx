import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

function Layout() {
  return (
    <>
      <Outlet context={{ navbar: <Navbar /> }} />
      <Footer />
    </>
  );
}

export default Layout;
