import { configureStore } from '@reduxjs/toolkit';
import todos from './todos';
import filter from './filter';

const store = configureStore({
  reducer: {
    todos,
    filter,
  },
});

store.subscribe(() => {
  const stateStr = JSON.stringify(store.getState().todos);
  localStorage.setItem('todos', stateStr);
});

export default store;
