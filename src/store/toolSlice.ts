// src/store/toolsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Tool = 'select' | 'text' | 'brush' | 'eraser' | 'shape'; // Extend as needed

interface ToolsState {
  selectedTool: Tool;
}

const initialState: ToolsState = {
  selectedTool: 'select',
};

const toolsSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    setSelectedTool(state, action: PayloadAction<Tool>) {
      state.selectedTool = action.payload;
    },
  },
});

export const { setSelectedTool } = toolsSlice.actions;
export default toolsSlice.reducer;
