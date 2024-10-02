// src/components/ToolsPanel.tsx
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { setSelectedTool, Tool } from '@/store/toolSlice';
import { cn } from "@/lib/utils"
import {
  MousePointer,
  Type,
  Brush,
  Eraser,
  Square,
} from 'lucide-react';
import { Button } from './ui/button';

const tools: { name: string; tool: Tool; icon: React.ReactNode }[] = [
  { name: 'Select', tool: 'select', icon: <MousePointer /> },
  { name: 'Text', tool: 'text', icon: <Type /> },
  { name: 'Brush', tool: 'brush', icon: <Brush /> },
  { name: 'Eraser', tool: 'eraser', icon: <Eraser /> },
  { name: 'Shape', tool: 'shape', icon: <Square /> },
];

const ToolsPanel: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedTool = useAppSelector((state) => state.tools.selectedTool);

  const handleToolSelect = (tool: Tool) => {
    dispatch(setSelectedTool(tool));
  };

  return (
    <div className="flex flex-col items-center p-2 space-y-2">
      {tools.map((toolItem) => (
        <Button
          key={toolItem.tool}
          variant={selectedTool === toolItem.tool ? 'default' : 'ghost'}
          size="icon"
          onClick={() => handleToolSelect(toolItem.tool)}
          className={cn(
            'flex items-center justify-center',
            selectedTool !== toolItem.tool && 'hover:border hover:border-input hover:bg-background hover:text-accent-foreground'
          )}
        >
          {toolItem.icon}
        </Button>
      ))}
    </div>
  );
};

export default ToolsPanel;
