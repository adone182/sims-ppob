import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saldo: JSON.parse(sessionStorage.getItem("saldo")) || 0,
  nominalTopUp: [10000, 20000, 50000, 100000, 250000, 500000],
  loading: false,
  error: null,
};

const topUpSlice = createSlice({
  name: "topup",
  initialState,
  reducers: {
    topUpSaldo: (state, action) => {
      state.saldo = action.payload;
      sessionStorage.setItem("saldo", JSON.stringify(action.payload));
    },

    reduceSaldo: (state, action) => {
      state.saldo -= action.payload;
      sessionStorage.setItem("saldo", JSON.stringify(state.saldo));
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { topUpSaldo, reduceSaldo, setLoading, setError } =
  topUpSlice.actions;
export const getSaldo = (state) => state.topup.saldo;
export default topUpSlice.reducer;

// const topUpSlice = createSlice({
//   name: "topup",
//   initialState,
//   reducers: {
//     topUpSaldo: (state, action) => {
//       state.saldo = action.payload;
//       sessionStorage.setItem("saldo", JSON.stringify(action.payload));
//     },

//     setLoading: (state, action) => {
//       state.loading = action.payload;
//     },

//     setError: (state, action) => {
//       state.error = action.payload;
//     },
//   },
// });

// export const { topUpSaldo, setLoading, setError } = topUpSlice.actions;
// export const getSaldo = (state) => state.topup.saldo;
// export default topUpSlice.reducer;
