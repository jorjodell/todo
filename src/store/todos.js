import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('todos')) ?? [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    removeTodo() {},
  }
})

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;