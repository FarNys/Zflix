import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movieSlice";
import seriesReducer from "../features/seriesSlice";
import dynamicReducer from "../features/dynamic";
import searchReducer from "../features/searchSlice";
import userReducer from "../features/firebaseSlice";
import cssReducer from "../features/globalCSS";
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    series: seriesReducer,
    dynamic: dynamicReducer,
    search: searchReducer,
    user: userReducer,
    css: cssReducer,
  },
});
