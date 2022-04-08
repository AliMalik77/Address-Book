import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//export more users for efficient data fetching

export const cacheData = createAsyncThunk("cache/getData", async (data) => {
  const page = data.page;
  const nationality = data.filter;
  const limit = data.limit;
  console.log("page parameter in cache  >>>>>>>>>>>", page);
  console.log("nationality >>>>>>>>>>>", nationality);
  console.log("limit >>>>>>>>>>>", limit);

  const response = await axios.get(
    `https://randomuser.me/api/?page=${page}&results=${limit}`
  );
  return response.data.results;
});

export const getUser = createAsyncThunk("get/userData", async (data) => {
  const page = data.page;
  const nationality = data.filter;
  const limit = data.limit;
  console.log("page parameter >>>>>>>>>>>", page);
  //if page = 1 =====> load more users
  console.log("nationality >>>>>>>>>>>", nationality);
  console.log("limit >>>>>>>>>>>", limit);
  const response = await axios.get(
    `https://randomuser.me/api/?page=${page}&results=${limit}`
  );
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
    cachedata: [],
    searchData: [],
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
      state.cachedata = [];
    },
    searchUser: (state, action) => {
      console.log(
        "search user action payload ............>>>>>>>>>>>",
        action.payload
      );
      if (action?.payload?.length > 0) {
        state.searchData = action.payload;
      } else {
        state.searchData = [];
      }
    },
  },

  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      (state.loading = false),
        console.log("action payload check ........>>>>", action);
      state.user = [...state.user, ...action.payload];
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
    [cacheData.pending]: (state, action) => {
      state.loading = true;
    },
    [cacheData.fulfilled]: (state, action) => {
      state.loading = false;
      const page = action.meta.arg.page;
      if (page == 1) {
        state.cachedata = [...action.payload];
      } else {
        state.user = [...state.user, ...state.cachedata];
        state.cachedata = [...action.payload];
      }
    },
    [cacheData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { setFilter, emptyUser, searchUser } = userSlice.actions;

export default userSlice.reducer;
