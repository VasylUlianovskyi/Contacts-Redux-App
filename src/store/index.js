import { configureStore } from "@reduxjs/toolkit";
import contacsReducer from "./slices/contactsSlice";

const store = configureStore({
  reducer: {
    contactsList: contacsReducer,
  },
});

export default store;
