import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      console.log("Iam inside Thunk");
      console.log(res.data);
      return res.data;
    });
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    postList: [],
    status: null,
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.postList = action.payload;
      state.status = "success";
    },

    [getPosts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default postSlice.reducer;


