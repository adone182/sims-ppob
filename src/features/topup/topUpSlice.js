import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saldo: JSON.parse(localStorage.getItem("saldo")) || 0,
  nominalTopUp: [10000, 20000, 50000, 100000, 250000, 500000],
  loading: false,
  error: null,
};

const topUpSlice = createSlice({
  name: "topup",
  initialState,
  reducers: {
    setSaldo: (state, action) => {
      state.saldo = action.payload;
      localStorage.setItem("saldo", JSON.stringify(action.payload));
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setSaldo, setLoading, setError } = topUpSlice.actions;
export const getSaldo = (state) => state.topup.saldo;
export default topUpSlice.reducer;
