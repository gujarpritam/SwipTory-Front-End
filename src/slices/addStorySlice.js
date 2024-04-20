import { createSlice } from "@reduxjs/toolkit";

export const addStorySlice = createSlice({
  name: "addStory",

  initialState: {
    value: 0,
  },

  reducers: {
    setAddStory: (state) => {
      state.value = 1;
    },

    unSetAddStory: (state) => {
      state.value = 0;
    },
  },
});

export const { setAddStory, unSetAddStory } = addStorySlice.actions;
export default addStorySlice.reducer;
