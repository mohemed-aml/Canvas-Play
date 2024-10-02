// src/store/canvasSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CanvasState {
  selectedObject: any | null;
}

const initialState: CanvasState = {
  selectedObject: null,
};

const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    setSelectedObject(state, action: PayloadAction<any | null>) {
      state.selectedObject = action.payload;
    },
  },
});

export const { setSelectedObject } = canvasSlice.actions;
export default canvasSlice.reducer;
