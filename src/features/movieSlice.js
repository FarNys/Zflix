import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  getTopMovies: [],
  currentActors: [],
};

const getMoviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getAllTopMovies: (state, action) => {
      state.getTopMovies = action.payload.allData;
    },
    getcurrentActors: (state, action) => {
      state.currentActors = action.payload.itemData;
    },
  },
});
export const { getAllTopMovies, getcurrentActors } = getMoviesSlice.actions;
export const selectTopMovies = (state) => state.movies.getTopMovies;
export const selectMoviesID = (state) => state.movies.currentActors;

export default getMoviesSlice.reducer;
