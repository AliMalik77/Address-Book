import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../Redux/reducers/userReducer";
// import { increment, decrement } from "../Redux/counter";
// import { useGetAllDataQuery, useGetPageDataQuery } from "../Services/getData";

const Header = () => {
  // const [count, setCount] = useState(0);
  // const { data, isError, isLoading, isSuccess } = useGetAllDataQuery();
  // const response = useGetPageDataQuery(1);
  // console.log(`data  is .............>>>>>>>>>>>`, response?.data?.results);
  // console.log("response Data .....", data);
  // console.log("isError >>>>>>>> .....", isError);
  // console.log("isLoading .....", isLoading);
  // console.log("isSuccess .....", isSuccess);
  const { user } = useSelector((state) => ({ ...state.app }));
  // console.log("data fetched ..........>>>>>>>>>>>", user);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  const getUserData = () => {
    console.log("page found is >>>>>>>>>>>>>>>", page);

    dispatch(getUser({ page }));
    setPage(page + 1);
  };

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div style={{ textAlign: "center", fontWeight: "bold" }}>
      <h1>The Count is </h1>
      <button onClick={getUserData}>Increment</button>
    </div>
  );
};

export default Header;
