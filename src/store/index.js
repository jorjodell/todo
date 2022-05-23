import { configureStore } from '@reduxjs/toolkit';
import todos from './todos';

const store = configureStore({
  reducer: todos,
});

store.subscribe(() => {
  const stateStr = JSON.stringify(store.getState());
  localStorage.setItem('todos', stateStr);
});

export default store;
