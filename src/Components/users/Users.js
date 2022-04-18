import React, { useState, useEffect, useRef } from "react";
import Cards from "../card/Card";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Typography } from "antd";
import { setPageNo, setLimit } from "../../Redux/reducers/userReducer";

import { getUser } from "../../Redux/actions/userActions";
import { filterUser } from "../../Redux/actions/settingActions";

import "./users.styles.less";

const { Title } = Typography;

const Users = (props) => {
  const [page, setPage] = useState(0);
  const [loading, isloading] = useState(false);
  const [datafetched, setDataFetched] = useState(false);

  const { user, error, filter, searchData, pageNo } = props.data;
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
            dispatch(setPageNo(page));
            dispatch(setLimit(pageNo * 10));
          }
          if (page > 1) {
            dispatch(getUser({ page, filter, limit: 10 }));
            dispatch(setPageNo(page));
            dispatch(setLimit(pageNo * 10));
          }
        } else {
          if (page == 1) {
            dispatch(filterUser({ page, filter, limit: 10 }));
            dispatch(setPageNo(page));
            dispatch(setLimit(pageNo * 10));
          }
          if (page > 1) {
            dispatch(filterUser({ page, filter, limit: 10 }));
            dispatch(setPageNo(page));
            dispatch(setLimit(pageNo * 10));
          }
        }
      }
    } else {
      setDataFetched(true);
      //set cache to null
    }
  }, [page]);

  if (!datafetched) {
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

export default Users;
