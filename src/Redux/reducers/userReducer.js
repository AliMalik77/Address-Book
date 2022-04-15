import { createSlice } from "@reduxjs/toolkit";
import { getUser, cacheData, filterUser } from "../actions/userActions";
import selector from "../selectors/selector";

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
      state.filter = action.payload;
    },
    emptyUser: (state, action) => {
      state.user = [];
      state.cachedata = [];
    },
    searchUser: (state, action) => {
      if (action?.payload?.length > 0) {
        state.searchData = action.payload;
      } else {
        state.searchData = [];
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      (state.loading = false),
        (state.user = [...state.user, ...action.payload]);
      console.log("user state data", state.user);
      // console.log("action payload  data", action.payload);
      // const unsafe = selector(action.payload);
      // console.log("unsafe data ",unsafe);
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(filterUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(filterUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = [...state.user, ...action.payload];
    });
    builder.addCase(filterUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(cacheData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(cacheData.fulfilled, (state, action) => {
      state.loading = false;
      const page = action.meta.arg.page;
      if (page == 1) {
        state.cachedata = [...action.payload];
      } else {
        state.user = [...state.user, ...state.cachedata];
        state.cachedata = [...action.payload];
      }
    });
    builder.addCase(cacheData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const { setFilter, emptyUser, searchUser } = userSlice.actions;

export default userSlice.reducer;
