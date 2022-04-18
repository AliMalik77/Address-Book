import React from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "../Components/users/Users";
import Selector from "../Redux/selectors/selector";
const user = () => {
  const { error, filter, searchData, pageNo } = useSelector(
    (state) => state.app
  );

  const user = useSelector((state) => Selector(state.app));
  const data = { user, error, filter, searchData, pageNo };
  return (
    <>
      <User data={data} />
    </>
  );
};

export default user;
