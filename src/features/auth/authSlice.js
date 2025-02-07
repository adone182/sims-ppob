import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: sessionStorage.getItem("token") || null,
  isAuthenticated: !!sessionStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      sessionStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("profile");
      sessionStorage.removeItem("saldo");
    },
  },
});

export const getToken = (state) => state.auth.token;
export const getIsAuthenticated = (state) => state.auth.isAuthenticated;

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
