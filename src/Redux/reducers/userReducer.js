import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("get/userData", async (data) => {
  const page = data.page;
  const nationality = data.filter;
  console.log("page parameter >>>>>>>>>>>", page);
  console.log("nationality >>>>>>>>>>>", nationality);
  const response = await axios.get(
    `https://randomuser.me/api/?page=${page}&results=10`
  );
  // console.log("respponse from rediucer ==>>>>>>", response?.data?.results);
  return response.data.results;
});

export const filterUser = createAsyncThunk("get/filterData", async (data) => {
  const page = data.page;
  const nationality = data.filter;
  console.log("page parameter >>>>>>>>>>>", page);
  console.log("nationality >>>>>>>>>>>", nationality);
  const response = await axios.get(
    `https://randomuser.me/api/?page=${page}&results=10&nat=${nationality}`
  );
  console.log("response from filter reducer ==>>>>>>", response?.data?.results);
  return response.data.results;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    loading: false,
    error: null,
    filter: null,
  },
  reducers: {
    setFilter: (state, action) => {
      // console.log("payload datad", action.payload);
      state.filter = action.payload;
    },
    emptyUser: (state, action) => {
      state.user = [];
    },
  },

  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      (state.loading = false),
        // console.log("action payload check ........>>>>", action);
        (state.user = [...state.user, ...action.payload]);
    },
    [getUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [filterUser.pending]: (state, action) => {
      state.loading = true;
    },
    [filterUser.fulfilled]: (state, action) => {
      state.loading = false;
      // state.filter = true;
      state.user = [...state.user, ...action.payload];
    },
    [filterUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { setFilter, emptyUser } = userSlice.actions;

export default userSlice.reducer;
