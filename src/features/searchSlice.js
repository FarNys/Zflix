import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchData: [],
};

const getSearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getAllResults: (state, action) => {
      state.searchData = action.payload.allSearchData;
    },
  },
});
export const { getAllResults } = getSearchSlice.actions;
export const selectSearchMovies = (state) => state.search.searchData;

export default getSearchSlice.reducer;
