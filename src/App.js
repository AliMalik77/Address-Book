import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Settings from "./Pages/Settings";
import Home from "./Pages/Home";

//only routing performed in app.js
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
};

export default App;
