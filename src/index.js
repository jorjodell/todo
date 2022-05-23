import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday'
import weekday from 'dayjs/plugin/weekday'
import { Provider } from 'react-redux';
import store from './store';

dayjs.extend(isToday)
dayjs.extend(weekday)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

