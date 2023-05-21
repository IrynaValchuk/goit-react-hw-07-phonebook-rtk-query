import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import { contactsInitialState } from './initialState';
import { STATUS } from 'constants';
import {
  handleFulfilled,
  handleFulfilledAdd,
  handleFulfilledDelete,
  handleFulfilledGet,
  handlePending,
  handleRejected,
  operationSelectionFn,
} from 'helpers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...operationSelectionFn(PENDING)), handlePending)
      .addMatcher(isAnyOf(...operationSelectionFn(FULFILLED)), handleFulfilled)
      .addMatcher(isAnyOf(...operationSelectionFn(REJECTED)), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
