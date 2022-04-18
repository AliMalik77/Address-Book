import { createSelector } from "reselect";
export const selectSelf = (state) => state.user;
export const limitSelf = (state) => state.pageNo;
export const limitSelector = (state) => state.limit;
const Selector = createSelector(
  [selectSelf, limitSelf, limitSelector],
  (state, page, limit) => {
    if (page == 1) {
      return state.slice(0, page * 10);
    }
    if (page > 1) {
      return state.slice(0, page * 10);
    }
  }
);
export default Selector;
