import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import { bankingReducer } from './reducers/bankingReducers';

const store = createStore(bankingReducer);

ReactDOM.render(<App />, document.getElementById('root'));
