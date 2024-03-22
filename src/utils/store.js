import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import moviesReducer from "./moviesSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    movies: moviesReducer,
    search: searchReducer,
  },
});

export default store;
