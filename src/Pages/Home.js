import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Search from "../Components/search/Search";
import Layout from "../Components/layout/Layoutwrap.js";
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../Redux/selectors/selector.js";
import { fetchMoreUsersSelector } from "../Redux/selectors/selector.js";
import Usertest from "../Components/users/Users";
import { getUser } from "../Redux/actions/userActions";
import { setPageNo, setLimit } from "../Redux/reducers/userReducer";
import { Row, Col, Typography } from "antd";
// import { ErrorBoundary } from "react-error-boundary";
// import { ErrorHandler } from "../Components/error/errorBoundary";
// import ErrorBoundary from "../Components/error/errorBoundary";
const Home = () => {
  const { error, searchData, pageNo } = useSelector((state) => state.app);
  const { filter } = useSelector((state) => state.settings);
  const user = useSelector((state) => userSelector(state.app));

  const fetchMore = useSelector((state) => fetchMoreUsersSelector(state.app));

  const [page, setPage] = useState(0);
  const [loading, isloading] = useState(false);

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
    if (fetchMore) {
      isloading(true);
      if (loading) {
        if (pageNo == 1) {
          dispatch(getUser({ pageNo, filter }));
          dispatch(setPageNo(pageNo + 1));
        }
        if (pageNo > 1 && pageNo < 6) {
          dispatch(getUser({ pageNo, filter, limit: 10 }));
          dispatch(setPageNo(pageNo + 1));
        }
      }
    }
  }, [page]);

  const data = {
    user,
    error,
    setNode,
    filter,
    searchData,
    pageNo,
    fetchMore,
  };

  return (
    <Layout>
      <Search data={user} />

      <Usertest data={data} />
    </Layout>
  );
};

export default Home;
