import {
  createSlice,

} from "@reduxjs/toolkit";

import { register, login, logOut } from "./operations";

const initialState = {
  user: { name: "", email: "" },
  token: null,
  isLoggedIn: false,
  errorLoggedIn: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder

      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;

        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;

        state.isLoggedIn = false;
        state.errorLoggedIn = action.payload;
      })

      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: "", email: "" };
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.errorLoggedIn = action.payload;
        state.isLoggedIn = false;
      })

      .addCase(login.pending, (state, action) => {
        state.isLoading = true;

      })


  },
});

export const authReducer = authSlice.reducer;