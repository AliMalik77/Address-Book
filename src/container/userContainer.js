import React from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "../Components/users/Users";
import { createSelector } from "reselect";
const user = () => {
  const { user, error, filter, searchData, pageNo } = useSelector(
    (state) => state.app
  );

  const data = { user, error, filter, searchData, pageNo };
  return (
    <>
      <User data={data} />
    </>
  );
};

export default user;
