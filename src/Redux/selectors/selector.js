import { createSelector } from "reselect";
export const userState = (state) => state.user;
export const pageNoState = (state) => state.pageNo;
export const limitState = (state) => state.limit;

const userSelector = createSelector(
  [userState, pageNoState, limitState],
  (state, page, limit) => {
    if (page == 1) {
      return state.slice(0, page * 10);
    }
    if (page > 1) {
      return state.slice(0, page * 10);
    }
  }
);
export default userSelector;
