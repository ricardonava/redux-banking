import { combineReducers } from 'redux';
import { authReducer } from './authReducers';
import { bankingReducer } from './bankingReducers';

const rootReducer = combineReducers({
  auth: authReducer,
  banking: bankingReducer
});

export default rootReducer;
