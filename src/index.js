import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Components/Navbar";
import Users from "./Components/Users";
import Serch from "./Components/Search";

import Header from "./Components/Header";
import { store } from "../src/Redux/store";
import { Provider } from "react-redux";

const HelloWorld = () => {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Serch />
        <Users />

        {/* <Header /> */}
      </Provider>
    </div>
  );
};

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
