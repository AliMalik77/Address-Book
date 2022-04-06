// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const getdataApi = createApi({
  //unique key that where redux store saves the cache data
  reducerPath: "getdataApi",
  //fetchBaseQuery=>fetch wrapper that handles request headers and response parsing

  //testingAPI
  //https://randomuser.me/api/?page=${page}&results=10
  baseQuery: fetchBaseQuery({
    baseUrl: "https://randomuser.me/api/",
  }),
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: () => ({ url: "posts", method: "GET" }),
    }),
    getPageData: builder.query({
      query: (page) => ({ url: `?page=${page}&results=10`, method: "GET" }),
    }),
  }),
});

//GetDataByPage

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllDataQuery, useGetPageDataQuery } = getdataApi;
