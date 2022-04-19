import { createSelector } from "reselect";
export const userState = (state) => state.user;
export const pageNoState = (state) => state.pageNo;

export const userSelector = createSelector(
  [userState, pageNoState],
  (state, page) => {
    return state.slice(0, -10);
  }
);

export const fetchMoreUsersSelector = createSelector([userState], (state) => {
  if (state.length < 60) {
    return true;
  } else {
    return false;
  }
});
