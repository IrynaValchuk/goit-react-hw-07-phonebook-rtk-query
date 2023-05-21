import { toast } from 'react-toastify';

const {
  fetchContacts,
  addContact,
  deleteContact,
} = require('redux/operations');

const arrOperations = [fetchContacts, addContact, deleteContact];

export const operationSelectionFn = type => arrOperations.map(el => el[type]);

export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

export const handleFulfilledGet = (state, { payload }) => {
  state.items = payload;
};

export const handleFulfilledAdd = (state, { payload }) => {
  state.items.push(payload);
  toast.success('Contact successfully added');
};

export const handleFulfilledDelete = (state, { payload }) => {
  state.items = state.items.filter(item => item.id !== payload.id);
  toast.success('Contact successfully deleted');
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  toast.error(state.error);
};
