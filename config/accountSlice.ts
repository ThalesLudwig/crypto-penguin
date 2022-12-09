import { createSlice } from "@reduxjs/toolkit";
import { AccountType } from "../types/AccountType";

const initialState: AccountType = {
  address: "",
  balance: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    addAccount(state: AccountType, { payload }) {
      state.address = payload.address;
      state.balance = payload.balance;
    },
    clearAccount(state: AccountType) {
      state.address = initialState.address;
      state.balance = initialState.balance;
    },
  },
});

export const { addAccount, clearAccount } = accountSlice.actions;

export default accountSlice.reducer;
