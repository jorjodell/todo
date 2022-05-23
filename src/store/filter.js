import { createSlice } from "@reduxjs/toolkit";
import dayjs from 'dayjs';


const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    isDaily: false,
    date: dayjs(),
  },
  reducers: {
    toggleDaily(state) {
      state.isDaily = !state.isDaily
    },
    pickDate(state, action) {
      state.date = action.payload;
    }
  },
})

export const { toggleDaily, pickDate } = filterSlice.actions;

export default filterSlice.reducer;