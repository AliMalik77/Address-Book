import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "../src/Redux/store";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const HelloWorld = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </div>
  );
};

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
