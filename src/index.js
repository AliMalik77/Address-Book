import React from "react";
import ReactDOM from "react-dom";
// import Navbar from "./Components/Navbar";
// import Users from "./Components/Users";
// import Serch from "./Components/Search";
// import Modaal from "./Components/Modaal";
import App from "./Components/App";
// import Header from "./Components/Header";
import { store } from "../src/Redux/store";
import { Provider } from "react-redux";
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
