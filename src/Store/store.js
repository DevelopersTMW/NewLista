// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducers/authSlice/authSlice.js";
import unreadReducer from "../Reducers/UnreadCount/UnreadCountSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    unread: unreadReducer,
  },
});

export default store;
