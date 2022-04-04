import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Components/Navbar";
import Users from "./users";
import Serch from "./Components/Search";

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
