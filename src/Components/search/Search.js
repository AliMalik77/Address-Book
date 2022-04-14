import React from "react";
import { Input, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { searchUser } from "../../Redux/reducers/userReducer";
import "./search.styles.less";
const { Search } = Input;

const Serch = (props) => {
  const user = props.data;
  const dispatch = useDispatch();

  const onSearch = (value) => {
    if (value) {
      const search = user.filter((item) => {
        if (
          item.name.first.toUpperCase().includes(value.toUpperCase()) ||
          item.name.last.toUpperCase().includes(value.toUpperCase())
        ) {
          return item;
        }
      });
      if (search) {
        dispatch(searchUser(search));
      }
    } else {
      dispatch(searchUser());
    }
  };
  return (
    <>
      <div className="search-bar">
        <Search
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          style={{
            width: 400,
            textAlign: "center",
          }}
        />
      </div>
    </>
  );
};

export default Serch;
