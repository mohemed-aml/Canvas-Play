// src/components/MenuBar.tsx
import React, { useState } from 'react';
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@/components/ui/menubar';
import CanvasSizeDialog from './CanvasSizeDialog';

const MenuBar: React.FC = () => {
  const [isCanvasSizeOpen, setIsCanvasSizeOpen] = useState(false);

  return (
    <>
      <Menubar>
        {/* File Menu */}
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New</MenubarItem>
            <MenubarItem>Open</MenubarItem>
            <MenubarItem>Save</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* Edit Menu */}
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo</MenubarItem>
            <MenubarItem>Redo</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* Image Menu */}
        <MenubarMenu>
          <MenubarTrigger>Image</MenubarTrigger>
          <MenubarContent>
            <MenubarItem onSelect={() => setIsCanvasSizeOpen(true)}>
              Canvas Size
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      {/* Render the CanvasSize */}
      <CanvasSizeDialog
        isOpen={isCanvasSizeOpen}
        onClose={() => setIsCanvasSizeOpen(false)}
      />
    </>
  );
};

export default MenuBar;
