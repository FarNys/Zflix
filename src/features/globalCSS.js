import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCss: false,
};

const getCurrentCss = createSlice({
  name: "css",
  initialState,
  reducers: {
    changeToFalse: (state) => {
      state.currentCss = false;
    },
    changeToTrue: (state) => {
      state.currentCss = true;
    },
  },
});
export const { changeToTrue, changeToFalse } = getCurrentCss.actions;
export const selectCurrentCss = (state) => state.css.currentCss;

export default getCurrentCss.reducer;
