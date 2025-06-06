// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Reducers/UserCredientails/userSlice"; // ✅ correct path

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
