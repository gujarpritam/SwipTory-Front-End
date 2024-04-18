import { createSlice } from "@reduxjs/toolkit";

export const registrationSlice = createSlice({
  name: "registration",

  initialState: {
    value: 0,
  },

  reducers: {
    setRegistration: (state) => {
      state.value = 1;
    },

    unSetRegistration: (state) => {
      state.value = 0;
    },
  },
});

export const { setRegistration, unSetRegistration } = registrationSlice.actions;
export default registrationSlice.reducer;
