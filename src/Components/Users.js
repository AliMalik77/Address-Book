import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Cards from "./Card";
import { Card, Avatar, Row, Col, Typography } from "antd";
const { Title } = Typography;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const myRef = useRef();

  const options = {
    root: null,
    rootMargin: "10px",
  };
  useEffect(() => {
    if (page <= 5) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        console.log("entry", entry);
        if (entry && entry.isIntersecting) {
          console.log("true >>>>>>>>>>>>>>>.");

          const getData = async () => {
            const response = await axios.get(
              `https://randomuser.me/api/?page=${page}&results=10`
            );
            setUsers([...users, ...response.data.results]);
            setPage(page + 1);
            console.log(
              "new data ...........................>>",
              response.data.results
            );
            console.log("Second and so on.........");
          };

          getData();
        }
      }, options);
      if (myRef.current) {
        observer.observe(myRef.current);
      }
      return () => {
        if (myRef.current) {
          observer.unobserve(myRef.current);
        }
      };
    }
  }, [myRef.current, options]);

  return (
    <>
      <Title level={1} className="heading">
        List of users{" "}
      </Title>
      {console.log("user data ...", users)}

      <Row
        style={{
          padding: "100px",
          marginBottom: "300px",
        }}
      >
        {users.map((item, index) => (
          <Col lg={{ span: 6 }} xs={{ span: 24 }}>
            <Cards data={users[index]} key={index} />
          </Col>
        ))}
      </Row>

      <div className="center" ref={myRef}>
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
