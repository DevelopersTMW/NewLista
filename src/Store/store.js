// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducers/authSlice/authSlice.js";
import unreadReducer from "../Reducers/UnreadCount/UnreadCountSlice.js";
import pendingOffersReducer from "../Reducers/PendingOffers/pendingOffersSlice.js"; 


const store = configureStore({
  reducer: {
    auth: authReducer,
    unread: unreadReducer,
    pendingOffers: pendingOffersReducer,
  },
});

export default store;
