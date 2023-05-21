import { createSlice } from '@reduxjs/toolkit';
import { filterInitialState } from './initialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter: (state, action) => (state = action.payload),
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
