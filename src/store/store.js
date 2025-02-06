import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import profileReducer from "../features/profile/profileSlice";
import topUpReducer from "../features/topup/topUpSlice";
import serviceReducer from "../features/service/serviceSlice";
import transactionReducer from "../features/transaction/transactionSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    topup: topUpReducer,
    service: serviceReducer,
    transaction: transactionReducer,
  },
});
