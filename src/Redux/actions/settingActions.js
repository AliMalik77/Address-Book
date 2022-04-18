import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const filterUser = createAsyncThunk(
  "get/filter",
  async (data, { defaultLimit = 20 }) => {
    try {
      const page = data.page;
      const nationality = data.filter;
      const limit = data.limit;

      if (page == 1) {
        const response = await axios.get(
          `https://randomuser.me/api/?page=${page}&results=${defaultLimit}&nat=${nationality}`
        );

        return response.data.results;
      } else {
        const response = await axios.get(
          `https://randomuser.me/api/?page=${page}&results=${limit}&nat=${nationality}`
        );

        return response.data.results;
      }
    } catch (e) {
      return e;
    }
  }
);
