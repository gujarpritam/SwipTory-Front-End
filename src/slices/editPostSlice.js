import { createSlice } from "@reduxjs/toolkit";

export const editPostSlice = createSlice({
  name: "editPost",

  initialState: {
    value: null,
  },

  reducers: {
    setEditPost: (state, action) => {
      state.value = action.payload;
    },

    unSetEditPost: (state) => {
      state.value = null;
    },
  },
});

export const { setEditPost, unSetEditPost } = editPostSlice.actions;
export default editPostSlice.reducer;
