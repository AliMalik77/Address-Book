import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Settings from "./page/Settings";
import Home from "./page/Home";
import { store } from "../src/reduxx/store";
import { Provider } from "react-redux";
import ErrorBoundary from "./Components/common/error/ErrorBoundary";
const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Router>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
