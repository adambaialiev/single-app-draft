import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Country } from "../../config/types";

interface FairoUser {
  id: string;
  country: Country;
}

export interface AuthState {
  user: FairoUser | null;
  isOnboarded: boolean;
}

const initialUser: FairoUser = {
  id: "1",
  country: Country.RO,
};

const initialState: AuthState = {
  user: initialUser,
  isOnboarded: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsOnboarded: (state, action: PayloadAction<boolean>) => {
      state.isOnboarded = action.payload;
    },
  },
});

export const { setIsOnboarded } = authSlice.actions;
