import React from "react";
import { Radio } from "antd";
import { useDispatch } from "react-redux";
import { emptyUser } from "../../../Redux/reducers/userReducer";
import { filterUser } from "../../../Redux/actions/settingActions";
import "./filter.styles.less";

const NationalityFilter = (props) => {
  const dispatch = useDispatch();
  const nationalities = props.data;
  const handleClick = (value) => {
    dispatch(filterUser(value));
    dispatch(emptyUser());
  };
  return (
    <div className="radio-btn">
      <Radio.Group defaultValue={nationalities[0]} buttonStyle="solid">
        {nationalities.map((item, index) => (
          <Radio.Button
            value={index}
            onClick={() => handleClick(nationalities[index])}
            key={index}
          >
            {nationalities[index]}
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  );
};

export default NationalityFilter;
