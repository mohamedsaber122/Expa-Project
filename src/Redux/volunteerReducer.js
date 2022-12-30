import { createSlice } from "@reduxjs/toolkit";
import firstImage from "../Images/first-card.jpg";
const initialState = {
  data: [],
};

const volunteerSlice = createSlice({
  name: "volunteer",
  initialState,
  reducers: {
    test: (state, action) => {
      alert("hello");
    },
    setCustom: (state, action) => {
      state.custom.image = action.payload.image;
      state.custom.title = action.payload.title;
      state.custom.description = action.payload.description;
    },
    addData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { test, setCustom, addData } = volunteerSlice.actions;
export default volunteerSlice.reducer;
