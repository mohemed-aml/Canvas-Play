// src/components/CanvasSizeDialog.tsx
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button'

import { useAppDispatch } from '@/hooks/hooks';
import { setCanvasSizeSettings } from '@/store/canvasSizeSlice';
import React, { useState } from 'react';

interface CanvasSizeDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const CanvasSizeDialog: React.FC<CanvasSizeDialogProps> = ({ isOpen, onClose }) => {
  const [bgWidth, setBgWidth] = useState(800);
  const [bgHeight, setBgHeight] = useState(600);
  const [bgColor, setBgColor] = useState('#ffffff');

  const dispatch = useAppDispatch();

  const applyBackgroundSettings = () => {
    dispatch(
      setCanvasSizeSettings({ width: bgWidth, height: bgHeight, color: bgColor })
    );
    onClose(); // Close the dialog after applying settings
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle className="text-lg font-bold mb-4">Canvas Size</DialogTitle>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-900 text-sm">Width (px)</label>
          <input
            title="Width in pixels"
            type="number"
            value={bgWidth}
            onChange={(e) => setBgWidth(Number(e.target.value))}
            className="p-1 bg-gray-700 text-gray-100 rounded-sm"
          />
          <label className="text-gray-900 text-sm">Height (px)</label>
          <input
            title="Height in pixels"
            type="number"
            value={bgHeight}
            onChange={(e) => setBgHeight(Number(e.target.value))}
            className="p-1 bg-gray-700 text-gray-100 rounded-sm"
          />
          <label className="text-gray-900 text-sm">Background Color</label>
          <input
            title="Background Colour"
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="w-full h-8 p-1 rounded-sm"
          />
          <div className="flex justify-end space-x-2 mt-4">
            
            <Button onClick={onClose} variant="secondary">
              Cancel
            </Button>
            <Button onClick={applyBackgroundSettings} >
              Apply
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CanvasSizeDialog;
