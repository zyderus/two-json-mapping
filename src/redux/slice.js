import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { mmfields } from '../data/mmfields';
import { erpfields } from '../data/erpfields';
import { mappedfields } from '../data/mappedfields';
import { mapItemShape } from '../data/utils';

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
      mmfieldsAdapter.setAll(state.mm, fields);
    },
    addErpFields: (state) => {
      erpfieldsAdapter.setAll(state.erp, erpfields.content);
    },
    addMapFields: (state) => {
      mapfieldsAdapter.setAll(state.map, mappedfields.content);
    },
    selectErpField: (state, action) => {
      const { id, name, field_id } = action.payload;

      if (state.map.entities[id]) {
        mapfieldsAdapter.updateOne(state.map, { id, changes: { field_id } });
      } else {
        mapfieldsAdapter.upsertOne(state.map, {
          ...mapItemShape,
          manomano_field_id: id,
          manomano_field_name: name,
          field_id,
        });
      }
    },
    deleteMapping: (state, action) => {
      console.log(action.payload);
      mapfieldsAdapter.removeOne(state.map, action.payload);
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
