import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../resume-store";

export type NameType = {
  first_name: string;
  middle_name: string;
  last_name: string;
};

type ContactType = {
  mail: string;
  phone: string;
  location: string;
  linkedin: string;
};

export type PersonBasics = {
  name: NameType;
  role: string;
  about_me: string;
  contact: ContactType;
};

const initialState: PersonBasics = {
  name: { first_name: "first", middle_name: "middle", last_name: "last" },
  role: "role",
  about_me: "aboutme",
  contact: { mail: "mail", phone: "phone", location: "city", linkedin: "link" },
};

export const getPersonData = createAsyncThunk(
  "basicInfos/fetchData",
  async () => {
    const response = await (
      await fetch(`http://localhost:3000/resume.json`)
    ).json();

    const data = await response.afk.basic_infos;
    console.log(data);

    const person: PersonBasics = {
      name: {
        first_name: data.first_name,
        middle_name: data.middle_name,
        last_name: data.last_name,
      },
      role: data.role,
      about_me: data.about_me,
      contact: {
        mail: data.contact.mail,
        phone: data.contact.phone,
        location: data.contact.location,
        linkedin: data.contact.linkedin,
      },
    };
    return person;
  }
);

const basicInfoSlice = createSlice({
  name: "basicInfos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPersonData.fulfilled, (state, action) => {
      console.log("basicinfo");
      state.name = action.payload.name;
      state.role = action.payload.role;
      state.contact = action.payload.contact;
      state.about_me = action.payload.about_me;
    });
  },
});

export const selectPersonBasics = (state: RootState) => {
  return state.basics;
};

export default basicInfoSlice.reducer;
