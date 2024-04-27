import { createSlice } from "@reduxjs/toolkit";

export const triggerSlice = createSlice({
  name: "triggerPoint",

  initialState: {
    value: 0,
  },

  reducers: {
    setTrigger: (state) => {
      state.value = 1;
    },

    unSetTrigger: (state) => {
      state.value = 0;
    },
  },
});

export const { setTrigger, unSetTrigger } = triggerSlice.actions;
export default triggerSlice.reducer;
