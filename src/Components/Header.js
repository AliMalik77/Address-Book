import React from "react";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Redux/counter";
const Header = () => {
  // const [count, setCount] = useState(0);
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: "center", fontWeight: "bold" }}>
      <h1>The Count is {value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Header;
