import { createSlice } from "@reduxjs/toolkit";

export const slideSlice = createSlice({
  name: "slide",

  initialState: {
    value: null,
  },

  reducers: {
    setSlide: (state, action) => {
      state.value = action.payload;
    },

    unSetSlide: (state) => {
      state.value = null;
    },
  },
});

export const { setSlide, unSetSlide } = slideSlice.actions;
export default slideSlice.reducer;
