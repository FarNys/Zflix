import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  userEmail: "",
  userImage: "",
  loginState: false,
};

const getUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    isLogin: (state, action) => {
      state.loginState = action.payload.loginTrue;
      state.userName = action.payload.getUsername;
      state.userEmail = action.payload.getUserEmail;
      state.userImage = action.payload.getUserImage;
    },
    isSignout: (state) => {
      state.loginState = false;
      state.userName = "";
      state.userEmail = "";
      state.userImage = "";
    },
  },
});
export const { isLogin, isSignout } = getUserSlice.actions;
export const selectuserName = (state) => state.user.userName;
export const selectuserEmail = (state) => state.user.userEmail;
export const selectuserImage = (state) => state.user.userImage;
export const selectuserLogin = (state) => state.user.loginState;

export default getUserSlice.reducer;
