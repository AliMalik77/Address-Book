import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const filterUser = createAsyncThunk("", async (page, nationality) => {
  console.log("page parameter >>>>>>>>>>>", page);
  const response = await axios.get(
    `https://randomuser.me/api/?page=${page}&results=10&nat=${nationality}`
  );
  console.log("response from filter reducer ==>>>>>>", response?.data?.results);
  return response.data.results;
});

const userFilterSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    loading: false,
    error: null,
  },

  extraReducers: {
    [filterUser.pending]: (state, action) => {
      state.loading = true;
    },
    [filterUser.fulfilled]: (state, action) => {
      (state.loading = false),
        (state.user = [...state.user, ...action.payload]);
    },
    [filterUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default userFilterSlice.reducer;
