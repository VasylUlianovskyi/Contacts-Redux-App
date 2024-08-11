import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './slices/contactsSlice';
import postsReducer from './slices/postsSlice';
import usersReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    contactsList: contactsReducer,
    postsList: postsReducer,
    usersList: usersReducer,
  },
});

export default store;
