import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { default as authReducer } from './auth/authSlice';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
});
