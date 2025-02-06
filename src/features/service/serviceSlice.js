import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [],
  loading: false,
  error: null,
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    addDataServices: (state, action) => {
      state.services = action.payload;
    },
  },
});

export const { setLoading, setError, addDataServices } = serviceSlice.actions;
export default serviceSlice.reducer;
