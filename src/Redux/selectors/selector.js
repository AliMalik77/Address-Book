import { createSelector } from "reselect";
const selectSelf = (state) => state.user;
const limitSelf = (state) => state.pageNo;
console.log("hi");
const Selector = createSelector([selectSelf, limitSelf], (state, limit) => {
  console.log("state in selector", state);
  console.log("limit in selector", limit);

  if (limit == 1) {
    console.log("length of array .......>>>>>>", state.user);
    const length = state.length;

    return state.slice(0, 5);
  }
  //   return state;
});
console.log("bye");
export default Selector;
