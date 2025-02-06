import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
  loading: false,
  error: null,
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setDataTransactionList: (state, action) => {
      state.transactions = action.payload;
    },
  },
});

export const { setLoading, setError, setDataTransactionList } =
  transactionSlice.actions;
export default transactionSlice.reducer;
