import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../actions/userActions";
import { filterUser } from "../actions/settingActions";
import { initialState } from "../initialState";

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    emptyUser: (state, action) => {
      state.user = [];
    },
    setPageNo: (state, action) => {
      state.pageNo = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
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
  },
});
export const { setFilter, emptyUser, searchUser, setPageNo, setLimit } =
  userSlice.actions;

export default userSlice.reducer;
