import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import Cards from "./Card";
import Navbar from "./navbar";
import Users from "./users";
import Serch from "./Search";
import { Card, Avatar, Row, Col } from "antd";
// import './styles.less'
// import styles from
const HelloWorld = () => {
  return (
    <div>
      <Navbar />
      <Serch />
      <Users />
    </div>
  );
};

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
