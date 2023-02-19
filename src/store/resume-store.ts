import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import basicInfoSlice from "./basic-infos/basic-info-slice";
import educationSlice from "./education/education-slice";

const store = configureStore({
  reducer: {
    basics: basicInfoSlice,
    education: educationSlice,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
