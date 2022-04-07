import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counter";
import userReducer from "../../src/Redux/reducers/userReducer";
import filterUserReducer from "../Redux/reducers/filterUserReducer";
export const store = configureStore({
  reducer: { app: userReducer },
  // reducer: { counter: counterReducer },
});

// import { configureStore } from "@reduxjs/toolkit";
// // Or from '@reduxjs/toolkit/query/react'
// import { setupListeners } from "@reduxjs/toolkit/query";
// // import { pokemonApi } from "./services/pokemon";
// import { getdataApi } from "../Services/getData";
// export const store = configureStore({
//   reducer: {
//     // Add the generated reducer as a specific top-level slice
//     [getdataApi.reducerPath]: getdataApi.reducer,
//   },
//   // Adding the api middleware enables caching, invalidation, polling,
//   // and other useful features of `rtk-query`.
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(getdataApi.middleware),
// });

// // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// // see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch);
