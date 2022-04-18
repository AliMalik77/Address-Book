import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../src/Redux/reducers/userReducer";

export const store = configureStore({
  reducer: { app: userReducer },
});
