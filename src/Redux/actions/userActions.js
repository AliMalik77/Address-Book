import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk(
  "get/userData",
  async ({ page, limit = 20, nationality }) => {
    try {
      if (page == 1) {
        const response = await axios.get(
          `https://randomuser.me/api/?page=${page}&results=${limit}&nationality=${nationality}`
        );
        return response.data.results;
      } else {
        const response = await axios.get(
          `https://randomuser.me/api/?page=${page}&results=${limit}&nationality=${nationality}`
        );
        return response.data.results;
      }
    } catch (e) {
      return e;
    }
  }
);
