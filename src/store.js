import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./slices/registrationSlice";
import loginReducer from "./slices/loginSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    registration: registrationReducer,
    login: loginReducer,
    user: userReducer,
  },
});

export default store;
