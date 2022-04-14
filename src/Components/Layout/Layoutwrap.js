import React from "react";
import Header from "./Navbar";
import Footer from "./Footer";
import "./layout.styles.less";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
