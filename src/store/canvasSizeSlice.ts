// src/store/canvasSizeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CanvasSizeState {
  width: number;
  height: number;
  color: string;
}

const initialState: CanvasSizeState = {
  width: 800,
  height: 600,
  color: '#ffffff',
};

const canvasSizeSlice = createSlice({
  name: 'background',
  initialState,
  reducers: {
    setCanvasSizeSettings(state, action: PayloadAction<CanvasSizeState>) {
      state.width = action.payload.width;
      state.height = action.payload.height;
      state.color = action.payload.color;
    },
  },
});

export const { setCanvasSizeSettings } = canvasSizeSlice.actions;
export default canvasSizeSlice.reducer;
