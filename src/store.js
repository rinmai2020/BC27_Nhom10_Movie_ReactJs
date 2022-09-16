import { configureStore } from "@reduxjs/toolkit";
import filmManagerSlice from "modules/Admin/slice/filmManagerSlice";
import userManagementSlice from "modules/Admin/Users/slice/userManagementSlice";
import authSlice from "modules/Authentication/slices/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    movie: filmManagerSlice,
    user: userManagementSlice,
  },
});

export default store;
