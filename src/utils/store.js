import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import moviesReducer from "./moviesSlice";
import searchReducer from "./searchSlice";
import chatReducer from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    movies: moviesReducer,
    search: searchReducer,
    chat: chatReducer,
  },
});

export default store;
