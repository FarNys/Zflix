import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAllData: "",
  currentActors: [],
  currentAwards: "",
  currentBudget: "",
  currentRating: "",
  currentSimilars: [],
};
const getDynamicSlic = createSlice({
  name: "dynamic",
  initialState,
  reducers: {
    getcurrentActors: (state, action) => {
      state.currentActors = action.payload.itemData;
    },
    getAllAwards: (state, action) => {
      state.currentAwards = action.payload.awardsData;
      state.currentBudget = action.payload.budgetData;
    },
    catchAllData: (state, action) => {
      state.currentAllData = action.payload.allData;
    },
    getAllRating: (state, action) => {
      state.currentRating = action.payload.ratingData;
    },
    getAllSimilars: (state, action) => {
      state.currentSimilars = action.payload.similarsData;
    },
  },
});
export const {
  getAllAwards,
  getcurrentActors,
  catchAllData,
  getAllRating,
  getAllSimilars,
} = getDynamicSlic.actions;

export const selectMoviesID = (state) => state.dynamic.currentActors;
export const selectAwards = (state) => state.dynamic.currentAwards;
export const selectBudget = (state) => state.dynamic.currentBudget;
export const selectAllData = (state) => state.dynamic.currentAllData;
export const selectAllRating = (state) => state.dynamic.currentRating;
export const selectAllSimilars = (state) => state.dynamic.currentSimilars;

export default getDynamicSlic.reducer;
