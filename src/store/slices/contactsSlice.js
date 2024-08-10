import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [
    { id: 1, fullName: "Test", phoneNumber: "+380962323223" },
    { id: 2, fullName: "Ivo", phoneNumber: "+380962121221" },
  ],
};

const contacsSlice = createSlice({
  initialState,
  name: "contacts",
  reducers: {},
});

const { reducer } = contacsSlice;

export default reducer;
