import React from "react";
import { Radio } from "antd";
import { Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, emptyUser } from "../Redux/reducers/userReducer";
const { Title } = Typography;

const RadioButton = () => {
  const { user, error, filter } = useSelector((state) => state.app);
  console.log("radio button filter ..........>>>>>", filter);
  const dispatch = useDispatch();

  const page = 1;
  const handleClick = (value) => {
    console.log("value testing", value);
    dispatch(setFilter("CH"));
    dispatch(emptyUser());
  };
  //   console.log("user data in radio button", user);
  return (
    <div className="radio-btn">
      <Title level={1}>Search Users By Nationality</Title>
      <Radio.Group defaultValue="a" buttonStyle="solid">
        <Radio.Button value="a" onClick={() => handleClick("CH")}>
          CH
        </Radio.Button>
        <Radio.Button value="b" onClick={() => handleClick("ES")}>
          ES
        </Radio.Button>
        <Radio.Button value="c" onClick={() => handleClick("FR")}>
          FR
        </Radio.Button>
        <Radio.Button value="d" onClick={() => handleClick("GB")}>
          GB
        </Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default RadioButton;
