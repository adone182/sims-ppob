// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   profile: null,
//   loading: false,
//   error: null,
// };

// const profileSlice = createSlice({
//   name: "profile",
//   initialState,
//   reducers: {
//     setProfile: (state, action) => {
//       state.profile = action.payload;
//     },

//     setLoading: (state, action) => {
//       state.loading = action.payload;
//     },

//     setError: (state, action) => {
//       state.error = action.payload;
//     },
//   },
// });

// export const { setProfile, setLoading, setError } = profileSlice.actions;

// export default profileSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: JSON.parse(localStorage.getItem("profile")) || null,
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
      localStorage.setItem("profile", JSON.stringify(action.payload));
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setProfile, setLoading, setError } = profileSlice.actions;

export default profileSlice.reducer;
