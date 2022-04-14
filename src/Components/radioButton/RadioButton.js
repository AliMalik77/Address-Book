import React from "react";
import { Radio } from "antd";
import { Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, emptyUser } from "../../Redux/reducers/userReducer";
const { Title } = Typography;
import "./radio.styles.less";
const RadioButton = (props) => {
  const dispatch = useDispatch();

  const nationalities = props.data;
  const page = 1;
  const handleClick = (value) => {
    dispatch(setFilter(value));
    dispatch(emptyUser());
  };
  return (
    <div className="radio-btn">
      <Radio.Group defaultValue={nationalities[0]} buttonStyle="solid">
        {nationalities.map((item, index) => (
          <Radio.Button
            value={index}
            onClick={() => handleClick(nationalities[index])}
          >
            {nationalities[index]}
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  );
};

export default RadioButton;
