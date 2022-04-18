import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk(
  "get/userData",
  async (data, { defaultLimit = 20 }) => {
    try {
      const page = data.page;
      const nationality = data.filter;
      const limit = data.limit;

      if (page == 1) {
        const response = await axios.get(
          `https://randomuser.me/api/?page=${page}&results=${defaultLimit}`
        );
        return response.data.results;
      } else {
        const response = await axios.get(
          `https://randomuser.me/api/?page=${page}&results=${limit}`
        );
        return response.data.results;
      }
    } catch (e) {
      return e;
    }
  }
);
