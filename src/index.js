import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday'
import weekday from 'dayjs/plugin/weekday'
import { legacy_createStore as createStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';

dayjs.extend(isToday)
dayjs.extend(weekday)
const root = ReactDOM.createRoot(document.getElementById('root'));


function myReducer(state = [], action) {
  switch(action.type) {
    case 'ADD': return [...state, action.payload]
    case 'REMOVE': return state.filter((v) => v !== action.payload);
    default: return state
  }
}

const store = createStore(myReducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

