import { createSelector } from "reselect";
export const userState = (state) => state.user;
export const pageNoState = (state) => state.pageNo;
export const limitState = (state) => state.limit;

export const userSelector = createSelector(
  [userState, pageNoState, limitState],
  (state, page) => {
    return state.slice(0, page * 10);
  }
);

export const fetchMoreUsersSelector = createSelector([userState], (state) => {
  if (state.length < 60) {
    return true;
  } else {
    return false;
  }
});
