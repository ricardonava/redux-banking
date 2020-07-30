import { combineReducers } from 'redux';

import { bankingReducer } from './bankingReducers';
import { authReducer } from './authReducers';

const rootReducer = combineReducers({
  auth: authReducer,
  banking: bankingReducer
});

export default rootReducer;
