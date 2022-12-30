import { createSlice } from "@reduxjs/toolkit";
import firstImage from "../Images/first-card.jpg";
const initialState = {
  data: [],
  custom: {
    image: "",
    title: "",
    description: "",
    fees: "",
    date: "",
    country: "",
  },
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
      state.custom.fees = action.payload.fees;
      state.custom.date = action.payload.date;
      state.custom.country = action.payload.country;
    },
    addData: (state, action) => {
      state.data = action.payload;
      console.log(state.data);
    },
  },
});

export const { test, setCustom, addData } = volunteerSlice.actions;
export default volunteerSlice.reducer;
