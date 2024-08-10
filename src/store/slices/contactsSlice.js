import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  contacts: [
    {
      id: uuidv4(),
      fullName: 'Test',
      phoneNumber: '+380962323223',
      isFavourite: true,
    },
    {
      id: uuidv4(),
      fullName: 'Ivo',
      phoneNumber: '+380962121221',
      isFavourite: false,
    },
  ],
};

const contactsSlice = createSlice({
  initialState,
  name: 'contacts',
  reducers: {
    removeContacts: (state, { payload }) => {
      const foundContactIndex = state.contacts.findIndex(c => c.id === payload);
      if (foundContactIndex !== -1) {
        state.contacts.splice(foundContactIndex, 1);
      }
    },
    handleFavourite: (state, { payload }) => {
      const foundFavourite = state.contacts.find(c => c.id === payload);
      if (foundFavourite) {
        foundFavourite.isFavourite = !foundFavourite.isFavourite;
      }
    },
    createContacts: (state, { payload }) => {
      state.contacts.push({
        ...payload,
        id: uuidv4(),
        isFavourite: false,
      });
    },
  },
});

const { reducer, actions } = contactsSlice;

export const { removeContacts, handleFavourite, createContacts } = actions;
export default reducer;
