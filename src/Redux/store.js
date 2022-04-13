import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counter";
import userReducer from "../../src/Redux/reducers/userReducer";
// import filterUserReducer from "../Redux/reducers/filterUserReducer";
export const store = configureStore({
  reducer: { app: userReducer },
  // reducer: { counter: counterReducer },
});
