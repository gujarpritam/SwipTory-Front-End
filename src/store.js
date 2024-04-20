import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./slices/registrationSlice";
import loginReducer from "./slices/loginSlice";
import userReducer from "./slices/userSlice";
import addStoryReducer from "./slices/addStorySlice";
import slideReducer from "./slices/slideSlice";

const store = configureStore({
  reducer: {
    registration: registrationReducer,
    login: loginReducer,
    user: userReducer,
    addStory: addStoryReducer,
    slide: slideReducer,
  },
});

export default store;
