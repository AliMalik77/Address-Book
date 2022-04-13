import React from "react";
import { Input, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { searchUser } from "../Redux/reducers/userReducer";
// import { AudioOutlined } from "@ant-design/icons";
const { Search } = Input;

const Serch = () => {
  const { user, error, filter } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const onSearch = (value) => {
    if (value) {
      const search = user.filter((item) => {
        console.log(item.name.first);
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
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Search
          // placeholder="Search"
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
