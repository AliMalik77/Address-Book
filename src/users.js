import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Cards from "./Card";
import { Card, Avatar, Row, Col, Typography } from "antd";
import { Button, Radio } from "antd";
const { Title } = Typography;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  // const [check, setCheck] = useState(false);
  const myRef = useRef();

  // const options = {
  //   threshold: 1.0,
  // };
  useEffect(() => {
    if (page <= 5) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        console.log("entry", entry);
        if (entry && entry.isIntersecting) {
          console.log(
            "entry  is ...........................",
            entry.isIntersecting
          );
          setIsVisible(entry.isIntersecting);
          console.log("visibility is ......", isVisible);

          // }
        }
      });
      if (myRef.current) {
        observer.observe(myRef.current);
      }
      return () => {
        if (myRef.current) {
          observer.unobserve(myRef.current);
        }
      };
    }
  }, [myRef]);

  useEffect(() => {
    console.log("page is ....", page);
    console.log("myref", myRef.current);
    axios({
      method: "GET",
      url: `https://randomuser.me/api/?page=${page}&results=10`,
    }).then((response) => {
      console.log("user data before ...", users);
      console.log("new data .....", response.data.results);
      const data = response.data.results;

      setUsers([...users, ...response.data.results]);

      // console.log("asdjaksda", isVisible);
      if (isVisible) {
        setPage(page + 1);
        setIsVisible(false);
        console.log("visible again set to ......", isVisible);
      }
    });
  }, [page, isVisible, myRef]);

  // useEffect(() => {
  //   axios
  //     .get("https://randomuser.me/api/?results=10")
  //     .then((response) => {
  //       setUsers(response.data.results);
  //       console.log(response);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

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
      <div
        className="btn-btn"
        ref={myRef}
        style={{ backgroundColor: "red", height: "20vh" }}
      >
        {/* <Button
          type="primary"
          size={10}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Load More
        </Button> */}
      </div>
    </>
  );
};

export default Users;
