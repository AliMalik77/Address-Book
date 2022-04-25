import React from "react";
import { Input } from "antd";
import { useDispatch } from "react-redux";

import { searchUser } from "../../../Redux/reducers/userReducer";
import "./search.styles.less";
const { Search } = Input;

const Serch = () => {
  const dispatch = useDispatch();

  const onSearch = (value) => {
    if (value) {
      dispatch(searchUser(value));
    } else {
      dispatch(searchUser());
    }
  };
  return (
    <>
      <div className="search">
        <Search
          className="search-bar"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </div>
    </>
  );
};

export default Serch;
