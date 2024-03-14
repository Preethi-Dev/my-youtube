import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import moviesReducer from "./moviesSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    movies: moviesReducer,
  },
});

export default store;
