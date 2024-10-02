// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import toolsReducer from './toolSlice';
// import textStyleReducer from './textStyleSlice';
import backgroundReducer from './canvasSizeSlice';
import canvasReducer from './canvasSlice'; // Import the canvas reducer

export const store = configureStore({
  reducer: {
    tools: toolsReducer,
    // textStyle: textStyleReducer,
    background: backgroundReducer,
    canvas: canvasReducer, // Add canvas reducer here
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
