import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../src/Redux/reducers/userReducer";
import settingReducer from "../../src/Redux/reducers/settingsReducer";
export const store = configureStore({
  reducer: {
    app: userReducer,
    settings: settingReducer,
  },
});
