import { createSlice } from "@reduxjs/toolkit";
import { appConfig as config } from "../../config/config";
import { Country } from "../../config/types";

export interface ConfigState {
  config: typeof config;
  currentCountry: Country;
}

const initialState: ConfigState = {
  config,
  currentCountry: Country.UA,
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {},
});
