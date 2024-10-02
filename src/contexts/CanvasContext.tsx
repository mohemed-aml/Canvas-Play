// src/contexts/CanvasContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import * as fabric from 'fabric';


// Define the shape of the context
interface CanvasContextProps {
  canvas: fabric.Canvas | null;
}

// Create the context with default values
const CanvasContext = createContext<CanvasContextProps>({ canvas: null });

// Custom hook for consuming the context
export const useCanvas = () => useContext(CanvasContext);

// Define the props for the provider, including children
interface CanvasProviderProps {
  canvas: fabric.Canvas | null;
  children: ReactNode;
}

// Provider component with explicit children prop
export const CanvasProvider: React.FC<CanvasProviderProps> = ({ canvas, children }) => (
  <CanvasContext.Provider value={{ canvas }}>
    {children}
  </CanvasContext.Provider>
);
