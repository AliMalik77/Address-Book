import React from "react";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
const { Search } = Input;

// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: "#1890ff",
//     }}
//   />
// );

const onSearch = (value) => console.log(value);

const Serch = () => {
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
        {/* <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{ width: 300 }}
        /> */}
      </div>
    </>
  );
};

export default Serch;
