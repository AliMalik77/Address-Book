import React, { useState, useEffect, useRef } from "react";
import Cards from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Typography } from "antd";
import { getUser, filterUser } from "../Redux/reducers/userReducer";
const { Title } = Typography;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, isloading] = useState(false);

  const { user, error, filter } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  console.log("data fetched from redux store .....>>>>>", user, error);
  console.log("filter fetched from redux store ..........>>>>", filter);
  // const search = user.filter(
  //   (item) => item.fistName.includes(search) && item.lastName.includes(search)
  // );

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
    if (page <= 5) {
      isloading(true);
      if (loading) {
        if (filter === null) {
          dispatch(getUser({ page, filter }));
        } else {
          dispatch(filterUser({ page, filter }));
        }
      }
    }
  }, [page]);

  return (
    <>
      <Title level={1} className="heading">
        List of users{" "}
      </Title>
      {/* {console.log("user data ...", user)} */}

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
