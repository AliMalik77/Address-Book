import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Typography } from "antd";
const { Title } = Typography;
import Cards from "../card/Card";
import "./users.styles.less";

const UsersComponent = (props) => {
  const { dataFetched, searchData, setNode, user, error, filter, node } =
    props.data;

  if (!dataFetched) {
    if (searchData?.length > 0) {
      return (
        <>
          {" "}
          <Row
            style={{
              padding: "100px",
              marginBottom: "300px",
            }}
          >
            {searchData.map((item, index) => (
              <Col lg={{ span: 6 }} xs={{ span: 24 }} key={index}>
                <Cards data={searchData[index]} key={index} />
              </Col>
            ))}
          </Row>
        </>
      );
    } else {
      return (
        <>
          <Title level={1} className="heading">
            List of users{" "}
          </Title>

          <Row className="rows">
            {user.map((item, index) => (
              <Col lg={{ span: 6 }} xs={{ span: 24 }} key={index}>
                <Cards data={user[index]} />
              </Col>
            ))}
          </Row>

          <div style={{ height: "20vh", marginBottom: "150px" }}>
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
        </>
      );
    }
  } else {
    if (searchData?.length > 0) {
      return (
        <>
          <Row
            style={{
              padding: "100px",
              marginBottom: "300px",
            }}
          >
            {searchData.map((item, index) => (
              <Col lg={{ span: 6 }} xs={{ span: 24 }} key={index}>
                <Cards data={searchData[index]} key={index} />
              </Col>
            ))}
          </Row>
        </>
      );
    } else {
      return (
        <>
          <Row
            style={{
              padding: "100px",
              marginBottom: "300px",
            }}
          >
            {user.map((item, index) => (
              <Col lg={{ span: 6 }} xs={{ span: 24 }} key={index}>
                <Cards data={user[index]} key={index} />
              </Col>
            ))}
          </Row>
          <div className="end-list">
            <Title level={1} className="heading">
              End of list
            </Title>
          </div>
        </>
      );
    }
  }
};

export default UsersComponent;
