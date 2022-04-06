import React, { useState, useEffect, useRef } from "react";
import { useGetPageDataQuery } from "../Services/getData";
import axios from "axios";
import Cards from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { Card, Avatar, Row, Col, Typography } from "antd";
import { getUser } from "../Redux/reducers/userReducer";
const { Title } = Typography;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, isloading] = useState(false);

  const { user } = useSelector((state) => ({ ...state.app }));
  const dispatch = useDispatch();

  const options = {
    root: null,
    rootMargin: "10px",
  };

  const [node, setNode] = useState(null);

  const observer = useRef(
    new window.IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) incrementPage();
    }, options)
  );

  const incrementPage = () => {
    setPage((x) => x + 1);
    isloading(false);
  };

  useEffect(() => {
    const { current: currentObserver } = observer;
    currentObserver.disconnect();

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node]);

  useEffect(() => {
    console.log("page loading is .........", page);
    isloading(true);
    console.log("is loading check .....", loading);
    if (loading) {
      console.log("in check .............");
      dispatch(getUser(page));
      // isloading(false);
    }

    console.log("loading page ....", loading);
  }, [page]);

  return (
    <>
      <Title level={1} className="heading">
        List of users{" "}
      </Title>
      {console.log("user data ...", user)}

      <Row
        style={{
          padding: "100px",
          marginBottom: "300px",
        }}
      >
        {user.map((item, index) => (
          <Col lg={{ span: 6 }} xs={{ span: 24 }}>
            <Cards data={user[index]} key={index} />
          </Col>
        ))}
      </Row>

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
    </>
  );
};

export default Users;
