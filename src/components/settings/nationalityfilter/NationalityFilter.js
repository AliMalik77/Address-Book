import React from "react";
import { Radio } from "antd";
import { useDispatch } from "react-redux";
import { emptyUser } from "../../../redux/reducers/userReducer";
import { filterUser } from "../../../redux/actions/settingActions";
import "./filter.styles.less";

const NationalityFilter = (props) => {
  let [defaultNat] = props.data;

  const dispatch = useDispatch();
  const nationalities = props.data;
  const handleClick = (value) => {
    dispatch(filterUser(value));
    dispatch(emptyUser());
  };
  return (
    <div className="radio-btn">
      <Radio.Group defaultValue={defaultNat} buttonStyle="solid">
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
