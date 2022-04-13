import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../Redux/reducers/userReducer";

const Header = () => {
  const { user } = useSelector((state) => ({ ...state.app }));
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  const getUserData = () => {
    dispatch(getUser({ page }));
    setPage(page + 1);
  };

  return (
    <div style={{ textAlign: "center", fontWeight: "bold" }}>
      <h1>The Count is </h1>
      <button onClick={getUserData}>Increment</button>
    </div>
  );
};

export default Header;
