import React from "react";
import Navbar from "./Navbar";
import Serch from "./Search";
import Users from "./Users";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Settings from "./Settings";
import Home from "./Home";

//only routing performed in app.js
const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default App;
