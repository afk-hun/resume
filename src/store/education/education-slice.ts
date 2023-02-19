import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../resume-store";

type SchoolType = {
  degree: string;
  institution: string;
  interval: string;
};

type LanguagesType = {
  name: string;
  knowledge: number;
  motivation: number;
};

type EducationType = {
  name: SchoolType[];
  courses: string[];
  languages: LanguagesType[];
};

const initialState: EducationType = {
  name: [],
  courses: [],
  languages: [],
};

export const getEducationData = createAsyncThunk(
  "basicInfos/fetchData",
  async () => {
    const response = await (
      await fetch(`http://localhost:3000/resume.json`)
    ).json();

    const data = await response.afk.education;
    console.log(data);

    const education: EducationType = {
      name: data.school,
      courses: data.courses,
      languages: data.languages,
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
      state.name = action.payload.name;
      state.courses = action.payload.courses;
      state.languages = action.payload.languages;
    });
  },
});

export const selectEducation = (state: RootState) => {
  return state.education;
};

export default educationSlice.reducer;
