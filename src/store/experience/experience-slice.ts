import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { domainLink } from "../../App";
import { RootState } from "../resume-store";

export type ExperienceType = {
  interval: string;
  position: string;
  unit: string;
  company: string;
  place: string;
  description: string;
};

type ExperienceData = {
  experience: ExperienceType[];
  skills: string[];
};

const initialState: ExperienceData = {
  skills: [],
  experience: [],
};
export const getExperience = createAsyncThunk(
  "experience/fetchData",
  async () => {
    const response = await (await fetch(domainLink)).json();

    const data = await response.afk.work_experience;
    console.log(data);
    const experience: ExperienceData = {
      experience: data.experiences,
      skills: data.skills,
    };

    return experience;
  }
);
const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getExperience.fulfilled, (state, action) => {
      state.experience = action.payload.experience;
      state.skills = action.payload.skills;
    });
  },
});

export const selectExperience = (state: RootState) => {
  return state.experience;
};

export default experienceSlice.reducer;
