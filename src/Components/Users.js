import React, { useState, useEffect, useRef } from "react";
import Cards from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Typography } from "antd";
import { getUser, filterUser, cacheData } from "../Redux/reducers/userReducer";
const { Title } = Typography;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, isloading] = useState(false);
  const [datafetched, setDataFetched] = useState(false);
  const { user, error, filter, searchData } = useSelector((state) => state.app);

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
    if (page <= 5) {
      isloading(true);
      if (loading) {
        if (filter === null) {
          if (page == 1) {
            dispatch(getUser({ page, filter, limit: 10 }));
            dispatch(cacheData({ page: page + 1, filter, limit: 10 }));
          }
          if (page > 1) {
            dispatch(cacheData({ page: page + 1, filter, limit: 10 }));
          }
        } else {
          dispatch(filterUser({ page, filter }));
        }
      }
    } else {
      // setDataFetched(true);
      //set cache to null
    }
  }, [page]);

  if (searchData?.length > 0) {
    return (
      <>
        {" "}
        {/* <Title level={1} className="heading">
          END OF LIST.....
        </Title> */}
        <Row
          style={{
            padding: "100px",
            marginBottom: "300px",
          }}
        >
          {searchData.map((item, index) => (
            <Col lg={{ span: 6 }} xs={{ span: 24 }}>
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
        <div>{}</div>

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
};

export default Users;
