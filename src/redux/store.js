import { configureStore } from '@reduxjs/toolkit';
import { contactsAPI } from './contactsAPI';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    [contactsAPI.reducerPath]: contactsAPI.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsAPI.middleware),
});
