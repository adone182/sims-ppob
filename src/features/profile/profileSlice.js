import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
});

export default profileSlice.reducer;
