import React from "react";
import "./loader.styles.less";
const PageLoader = (props) => {
  const setNode = props.data;
  return (
    <div className="page-loader">
      <div className="center" ref={setNode}>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
};

export default PageLoader;
