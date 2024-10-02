import React from 'react';
import { useAppSelector } from '@/hooks/hooks';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Bold, Italic, Underline } from 'lucide-react';
import * as fabric from 'fabric';

const OptionBar: React.FC = () => {
  const canvas = useAppSelector((state) => state.canvas.selectedObject?.canvas);
  const selectedObject = useAppSelector((state) => state.canvas.selectedObject);
  const selectedTool = useAppSelector((state) => state.tools.selectedTool);

  const applyFormatting = (style: 'bold' | 'italic' | 'underline') => {
    if (!canvas || !selectedObject || !(selectedObject instanceof fabric.IText || selectedObject instanceof fabric.Textbox)) {
      return;  // Ensure the selected object is text
    }

    const textbox = selectedObject as fabric.IText;

    switch (style) {
      case 'bold':
        textbox.set('fontWeight', textbox.fontWeight === 'bold' ? 'normal' : 'bold');
        break;
      case 'italic':
        textbox.set('fontStyle', textbox.fontStyle === 'italic' ? 'normal' : 'italic');
        break;
      case 'underline':
        textbox.set('underline', !textbox.underline);
        break;
      default:
        break;
    }

    textbox.setCoords(); // Update coordinates
    canvas.renderAll();  // Re-render the canvas to reflect changes
  };

  const renderTextOptions = () => (
    <div className="flex space-x-1">
      <ToggleGroup type="multiple" aria-label="Text formatting">
        <ToggleGroupItem
          value="bold"
          aria-label="Bold"
          onClick={() => applyFormatting('bold')}
        >
          <Bold className="w-4 h-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="italic"
          aria-label="Italic"
          onClick={() => applyFormatting('italic')}
        >
          <Italic className="w-4 h-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="underline"
          aria-label="Underline"
          onClick={() => applyFormatting('underline')}
        >
          <Underline className="w-4 h-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );

  return (
    <div className="flex items-center px-2 py-1 border-b">
      {selectedTool === 'text' && renderTextOptions()}
    </div>
  );
};

export default OptionBar;