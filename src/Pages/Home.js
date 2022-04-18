import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Search from "../Components/search/Search";
import Layout from "../Components/layout/Layoutwrap.js";
import { useSelector, useDispatch } from "react-redux";
import userSelector from "./../Redux/selectors/Selector.js";
import Usertest from "../Components/users/Users";
import { getUser } from "../Redux/actions/userActions";

import { setPageNo, setLimit } from "../Redux/reducers/userReducer";
import { Row, Col, Typography } from "antd";

const Home = () => {
  const { error, filter, searchData, pageNo } = useSelector(
    (state) => state.app
  );
  const user = useSelector((state) => userSelector(state.app));
  const [page, setPage] = useState(0);
  const [loading, isloading] = useState(false);
  const [datafetched, setDataFetched] = useState(false);
  const dispatch = useDispatch();
  const [node, setNode] = useState(null);

  const options = {
    root: null,
    rootMargin: "10px",
  };

  const observer = useRef(
    new window.IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) incrementPage();
    }, options)
  );

  const incrementPage = () => {
    setPage((x) => x + 1);
    isloading(false);
  };

  useLayoutEffect(() => {
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

  const data = {
    user,
    error,
    setNode,
    filter,
    searchData,
    pageNo,
    datafetched,
  };

  return (
    <Layout>
      <Search data={user} />
      <Usertest data={data} />
    </Layout>
  );
};

export default Home;
