import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { domainLink } from "../../App";
import { RootState } from "../resume-store";

type SchoolType = {
  degree: string;
  institution: string;
  interval: string;
};

export type LanguagesType = {
  name: string;
  knowledge: number;
  motivation: number;
};

type EducationType = {
  school: SchoolType[];
  courses: string[];
  languages: LanguagesType[];
  driving_lic: string;
  status: "success" | "fail" | "unknown";
};

const initialState: EducationType = {
  school: [],
  courses: [],
  languages: [],
  driving_lic: "",
  status: "unknown",
};

export const getEducationData = createAsyncThunk(
  "education/fetchData",
  async () => {
    const response = await (await fetch(domainLink)).json();

    const data = await response.afk.education;
    console.log(data);

    const education: EducationType = {
      school: data.school,
      courses: data.courses,
      languages: data.languages,
      driving_lic: data.driving_license,
      status: "success",
    };
    return education;
  }
);

const educationSlice = createSlice({
  name: "basicInfos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEducationData.fulfilled, (state, action) => {
      console.log("education");
      state.school = action.payload.school;
      state.courses = action.payload.courses;
      state.languages = action.payload.languages;
      state.driving_lic = action.payload.driving_lic;
      state.status = action.payload.status;
    });
  },
});

export const selectEducation = (state: RootState) => {
  return state.education;
};

export default educationSlice.reducer;
