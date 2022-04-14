import React from "react";
import { Radio } from "antd";
import { Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, emptyUser } from "../../Redux/reducers/userReducer";
const { Title } = Typography;
import "./radio.styles.less";
const RadioButton = (props) => {
  console.log("props");
  // const { user, error, filter } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  // console.log("props for radio button .........>>>>>>>>", props.data);
  const nationalities = props.data;
  // console.log("nationalities are ..... >>>>", nationalities);
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
