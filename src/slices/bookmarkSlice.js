import { createSlice } from "@reduxjs/toolkit";

export const bookmarkSlice = createSlice({
  name: "bookmark",

  initialState: {
    value: 0,
  },

  reducers: {
    setBookmark: (state) => {
      state.value = 1;
    },

    unSetBookmark: (state) => {
      state.value = 0;
    },
  },
});

export const { setBookmark, unSetBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
