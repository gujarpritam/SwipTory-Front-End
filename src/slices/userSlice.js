import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",

  initialState: {
    value: null,
  },

  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },

    unSetUser: (state) => {
      state.value = null;
    },
  },
});

export const { setUser, unSetUser } = userSlice.actions;
export default userSlice.reducer;
