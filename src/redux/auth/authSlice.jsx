import { createSlice } from "@reduxjs/toolkit";
import operations from '../auth/auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedin: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [operations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedin = true;
    },
    [operations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedin = true;
    },
    [operations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedin = false;
    },
    [operations.fetchCurrentUser.pending](state, action) {
      state.isRefreshing = true;
    },
    [operations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [operations.fetchCurrentUser.rejected](state, action) {
      state.isRefreshing = false;
    },
  },
});

export default authSlice.reducer;