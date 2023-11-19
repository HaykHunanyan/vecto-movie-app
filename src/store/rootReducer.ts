import { combineReducers } from '@reduxjs/toolkit';
import featureReducer from './feature';

const rootReducer = combineReducers({
  todo: featureReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
