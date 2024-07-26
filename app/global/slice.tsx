"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userState: null || {},
  postTogle: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authUser: (state: { userState: {} | null }, { payload }) => {
      state.userState = payload;
    },
    signoutUser: (state) => {
      state.userState = {};
    },
    addToPost: (state) => {
      state.postTogle = !state.postTogle;
    },
  },
});

export const { authUser, signoutUser, addToPost } = slice.actions;

export default slice.reducer;
