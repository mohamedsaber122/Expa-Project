import { configureStore } from "@reduxjs/toolkit";
import volunteerReducer from "./volunteerReducer";

const store = configureStore({
  reducer: {
    volunteer: volunteerReducer,
  },
});

export default store;
