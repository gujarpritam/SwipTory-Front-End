import { createSlice } from "@reduxjs/toolkit";

export const storySlice = createSlice({
  name: "story",

  initialState: {
    value: null,
  },

  reducers: {
    setStory: (state, action) => {
      state.value = action.payload;
    },

    unSetStory: (state) => {
      state.value = null;
    },
  },
});

export const { setStory, unSetStory } = storySlice.actions;
export default storySlice.reducer;
