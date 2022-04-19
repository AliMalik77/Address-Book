import { createSlice } from "@reduxjs/toolkit";
import { filterUser } from "../actions/settingActions";

const settingSlice = createSlice({
  name: "settings",
  initialState: {
    filter: null,
  },
  extraReducers: (builder) => {
    builder.addCase(filterUser, (state, action) => {
      state.filter = action.payload.nat;
    });
  },
});

export default settingSlice.reducer;
