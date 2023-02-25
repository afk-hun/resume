import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { domainLink } from "../../App";
import { RootState } from "../resume-store";

export type InterestsType = {
  title: string;
  todo: string[];
};

const initialState: InterestsType = {
  title: "",
  todo: [],
};
export const getInterestsData = createAsyncThunk(
  "interests/fetchData",
  async () => {
    const response = await (await fetch(domainLink)).json();

    const data = await response.afk.interests;
    console.log(data);
    const interests: InterestsType = {
      title: data.title,
      todo: data.todo,
    };
    return interests;
  }
);
const interestsSlice = createSlice({
  name: "interests",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInterestsData.fulfilled, (state, action) => {
      state.title = action.payload.title;
      state.todo = action.payload.todo;
    });
  },
});

export const selectInterests = (state: RootState) => {
  return state.interests;
};

export default interestsSlice.reducer;
