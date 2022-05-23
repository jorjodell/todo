import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    {id: 1, title: 'Do', description: 'some text'},
    {id: 2, title: 'Code', description: 'some text'},
  ],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    removeTodo() {},
  }
})

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;