import { createSlice } from '@reduxjs/toolkit';
import { mmfields } from '../data/mmfields';
import { erpfields } from '../data/erpfields';
import { mappedfields } from '../data/mappedfields';

const initialState = {
  mmfields: [],
  erpfields: [],
  mappedfields: [],
  loading: false,
  error: null,
};

const fieldSlice = createSlice({
  name: 'fields',
  initialState,
  reducers: {
    initialize: (state) => {
      console.log('initialized');
    },
    addMmFields: (state) => {
      const fields = Object.values(mmfields.content);
      const sortedFields = fields.sort((a, b) => b.is_required - a.is_required);
      state.mmfields = sortedFields;
    },
    addErpFields: (state) => {
      state.erpfields = erpfields.content;
    },
    addMapFields: (state) => {
      state.mappedfields = mappedfields.content;
    },
  },
});

export const { initialize, addMmFields, addMapFields, addErpFields } =
  fieldSlice.actions;

export default fieldSlice.reducer;
