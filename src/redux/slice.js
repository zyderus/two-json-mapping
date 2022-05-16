import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { mmfields } from '../data/mmfields';
import { erpfields } from '../data/erpfields';
import { mappedfields } from '../data/mappedfields';

const mmfieldsAdapter = createEntityAdapter({
  selectId: (mmfield) => mmfield.id,
});

const erpfieldsAdapter = createEntityAdapter({
  selectId: (erpfield) => erpfield.field_id,
});

const mapfieldsAdapter = createEntityAdapter({
  selectId: (mapfield) => mapfield.manomano_field_id,
});

const initialState = {
  mm: mmfieldsAdapter.getInitialState(),
  erp: erpfieldsAdapter.getInitialState(),
  map: mapfieldsAdapter.getInitialState(),
  loading: false,
  error: null,
};
const fieldSlice = createSlice({
  name: 'fields',
  initialState,
  reducers: {
    addMmFields: (state) => {
      const fields = Object.values(mmfields.content);
      // const sortedFields = fields.sort((a, b) => b.is_required - a.is_required);
      // state.mmfields = sortedFields;
      mmfieldsAdapter.setAll(state.mm, fields);
    },
    addErpFields: (state) => {
      erpfieldsAdapter.setAll(state.erp, erpfields.content);
    },
    addMapFields: (state) => {
      mapfieldsAdapter.setAll(state.map, mappedfields.content);
    },
  },
});

export const mmSelectors = mmfieldsAdapter.getSelectors(
  (state) => state.fields.mm
);

export const erpSelectors = erpfieldsAdapter.getSelectors(
  (state) => state.fields.erp
);

export const mapSelectors = mapfieldsAdapter.getSelectors(
  (state) => state.fields.map
);

export const actions = { ...fieldSlice.actions };

export default fieldSlice.reducer;
