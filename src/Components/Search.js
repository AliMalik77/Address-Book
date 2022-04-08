import React from "react";
import { Input, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { searchUser } from "../Redux/reducers/userReducer";
import { AudioOutlined } from "@ant-design/icons";
const { Search } = Input;

const Serch = () => {
  const { user, error, filter } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const onSearch = (value) => {
    if (value) {
      console.log("value is .........????", value);
      const search = user.filter((item) => {
        console.log(item.name.first);
        if (
          item.name.first.toUpperCase().includes(value.toUpperCase()) ||
          item.name.last.toUpperCase().includes(value.toUpperCase())
        ) {
          return item;
        }
        // item.fistName.include(value) && item.lastName.include(value)
      });
      console.log("Searching result is .........?>>>>>>", search);
      if (search) {
        dispatch(searchUser(search));
      }
    } else {
      dispatch(searchUser());
      console.log("Type something to search..........");
    }
  };
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          style={{
            width: 400,
            textAlign: "center",
          }}
        />
        {/* <h1>Hello</h1> */}
      </div>
    </>
  );
};

export default Serch;
