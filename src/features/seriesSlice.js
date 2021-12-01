import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  getTopSeries: [],
};

const getSeriesSlice = createSlice({
  name: "series",
  initialState,
  reducers: {
    getAllTopSeries: (state, action) => {
      state.getTopSeries = action.payload.allData;
    },
  },
});
export const { getAllTopSeries } = getSeriesSlice.actions;
export const selectTopSeries = (state) => state.series.getTopSeries;

export default getSeriesSlice.reducer;
