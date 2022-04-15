import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const cacheData = createAsyncThunk("cache/getData", async (data) => {
  try {
    const page = data.page;
    const nationality = data.filter;
    const limit = data.limit;

    const response = await axios.get(
      `https://randomuser.me/api/?page=${page}&results=${limit}`
    );
    return response.data.results;
  } catch (e) {
    return e;
  }
});

export const getUser = createAsyncThunk("get/userData", async (data) => {
  try {
    const page = data.page;
    const nationality = data.filter;
    const limit = data.limit;
    const response = await axios.get(
      `https://randomuser.me/api/?page=${page}&results=${limit}`
    );
    return response.data.results;
  } catch (e) {
    return e;
  }
});

export const filterUser = createAsyncThunk("get/filterData", async (data) => {
  try {
    const page = data.page;
    const nationality = data.filter;
    const response = await axios.get(
      `https://randomuser.me/api/?page=${page}&results=10&nat=${nationality}`
    );

    return response.data.results;
  } catch (e) {
    return e;
  }
});
