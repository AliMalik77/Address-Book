import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk(
  "get/userData",
  async ({ pageNo, limit = 20, filter }) => {
    try {
      // console.log(pageNo, limit, filter);
      const response = await axios.get(
        `https://randomuser.me/api/?page=${pageNo}&results=${limit}&nationality=${filter}`
      );
      return response.data.results;
    } catch (e) {
      throw new Error("I crashed!");
      return e;
    }
  }
);
