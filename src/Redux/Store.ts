import { configureStore } from "@reduxjs/toolkit";
import stopwatchSlice from "./reducers/reducer";

export const store = configureStore({
  reducer: {
    stopwatch: stopwatchSlice,
  },
});
