import { createAction } from "@reduxjs/toolkit";

export const filterUser = createAction("filterAction", function data(nat) {
  return {
    payload: {
      nat,
    },
  };
});
