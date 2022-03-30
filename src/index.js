import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./navbar";
// import './styles.less'
// import styles from
const HelloWorld = () => {
  return (
    <div>
      <Navbar />

      <div style={{ backgroundColor: "red ", marginLeft: "300px" }}>
        <h1>Hello World</h1>
      </div>
    </div>
  );
};

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
