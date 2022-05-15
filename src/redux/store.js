import { configureStore } from '@reduxjs/toolkit';
import fieldReducer from './slice';

export default configureStore({
  reducer: {
    fields: fieldReducer,
  },
});
