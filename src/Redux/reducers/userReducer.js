import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("", async (page) => {
  console.log("page parameter >>>>>>>>>>>", page);
  const response = await axios.get(
    `https://randomuser.me/api/?page=${page}&results=10`
  );
  console.log("respponse from rediucer ==>>>>>>", response?.data?.results);
  return response.data.results;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    loading: false,
    error: null,
  },

  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      (state.loading = false),
        (state.user = [...state.user, ...action.payload]);
    },
    [getUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
