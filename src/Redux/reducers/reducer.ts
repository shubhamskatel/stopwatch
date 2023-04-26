import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  laps: [],
};

export const stopwatchSlice = createSlice({
  name: "stopwatch",
  initialState,
  reducers: {
    addLap: (state, action) => {
      state.laps = [...state.laps, action.payload];
    },
    resetLaps: (state) => {
      state.laps = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addLap, resetLaps } = stopwatchSlice.actions;

export default stopwatchSlice.reducer;
