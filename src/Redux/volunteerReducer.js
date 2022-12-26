import { createSlice } from "@reduxjs/toolkit";
import firstImage from "../Images/first-card.jpg";
const initialState = {
  data: [
    {
      id: 1,
      image: firstImage,
      title: "Global Classroom",
      description:
        "The project aims to contribute to SDG #4 by  providing and openingspace for quality education for people of  all ages, ensuring  educational  opportunities from initial literacy to other subjects such as mathematics, science  and languages.",
    },
  ],
  custom: {
    image: firstImage,
    title: "",
    description: "",
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
    },
  },
});

export const { test, setCustom } = volunteerSlice.actions;
export default volunteerSlice.reducer;
