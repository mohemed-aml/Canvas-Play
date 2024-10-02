import React, { useEffect, useRef, useState } from 'react';
import * as fabric from 'fabric';
import { useAppSelector } from '@/hooks/hooks';

const Workspace: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [bgRect, setBgRect] = useState<fabric.Rect | null>(null);

  const dimensions = useAppSelector((state) => ({
    width: state.background.width,
    height: state.background.height,
  }));
  const bgColor = useAppSelector((state) => state.background.color);
  const selectedTool = useAppSelector((state) => state.tools.selectedTool);

  // Initialize Fabric.js canvas once
  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas = new fabric.Canvas(canvasRef.current, {
        backgroundColor: 'white',
        width: dimensions.width,
        height: dimensions.height,
      });
      setCanvas(initCanvas);

      // Create background rectangle
      const rect = new fabric.Rect({
        width: dimensions.width,
        height: dimensions.height,
        fill: bgColor,
        selectable: false,
        left: 0,
        top: 0,
      });
      initCanvas.add(rect);
      setBgRect(rect);

      // Clean up on unmount
      return () => {
        initCanvas.dispose();
      };
    }
  }, []); // Empty dependency array to run only once

  // Update canvas and background rectangle when dimensions or color change
  useEffect(() => {
    if (canvas && bgRect) {
      canvas.setDimensions({
        width: dimensions.width,
        height: dimensions.height,
      });

      bgRect.set({
        width: dimensions.width,
        height: dimensions.height,
        fill: bgColor,
      });
      bgRect.setCoords();

      // Center the background rectangle
      bgRect.set({
        left: 0,
        top: 0,
      });

      canvas.renderAll();
    }
  }, [dimensions, bgColor, canvas, bgRect]);

  // Handle adding text when text tool is selected
  useEffect(() => {
    const handleAddText = (e: fabric.TEvent) => {
      if (!canvas) return;

      const pointer = canvas.getPointer(e.e);
      const text = new fabric.Textbox('Edit text', {
        left: pointer.x,
        top: pointer.y,
        fontSize: 20,
        fill: '#000',
      });

      canvas.add(text);
      canvas.setActiveObject(text); // Set the added text as the active object
      canvas.renderAll();

      // Deselect the text tool after one text is added (optional)
      // dispatch(setSelectedTool('select')); // If you want to switch back to select after adding text
    };

    if (canvas && selectedTool === 'text') {
      // Only enable adding text if the 'text' tool is selected
      canvas.on('mouse:down', handleAddText);
    } else if (canvas) {
      // Remove listener when not in 'text' mode
      canvas.off('mouse:down', handleAddText);
    }

    return () => {
      if (canvas) {
        canvas.off('mouse:down', handleAddText);
      }
    };
  }, [canvas, selectedTool]);

  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <div className="shadow-lg" style={{ width: dimensions.width, height: dimensions.height }}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default Workspace;