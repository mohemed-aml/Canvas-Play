import React, { useState, useRef, useEffect } from 'react';
import { Rnd } from 'react-rnd';

interface TextBoxProps {
  id: number;
  x: number;
  y: number;
  textAlign: 'left' | 'center' | 'right' | 'justify';
  setSelectedTextBoxId: (id: number | null) => void;
  selectedTextBoxId: number | null;
}

const TextBox: React.FC<TextBoxProps> = ({ id, x, y, textAlign, setSelectedTextBoxId, selectedTextBoxId }) => {
  const [position, setPosition] = useState({ x, y });
  const [size, setSize] = useState({ width: 200, height: 100 });
  const [fontSize, setFontSize] = useState(16);
  const contentRef = useRef<HTMLDivElement>(null);

  const isSelected = selectedTextBoxId === id;

  const handleDragStop = (e: any, data: any) => {
    setPosition({ x: data.x, y: data.y });
  };

  const handleResize = (e: any, direction: any, ref: any, delta: any, position: any) => {
    setSize({
      width: parseInt(ref.style.width),
      height: parseInt(ref.style.height),
    });
    setPosition({ x: position.x, y: position.y });

    if (['topLeft', 'topRight', 'bottomLeft', 'bottomRight'].includes(direction)) {
      const newFontSize = (parseInt(ref.style.width) / 200) * 16;
      setFontSize(newFontSize);
    }
  };

  const handleFocus = () => {
    setSelectedTextBoxId(id);
  };

  useEffect(() => {
    const contentEl = contentRef.current;
    if (contentEl) {
      contentEl.style.height = 'auto';
      contentEl.style.height = `${contentEl.scrollHeight}px`;
    }
  }, [contentRef, fontSize, textAlign]);

  return (
    <Rnd
      size={{ width: size.width, height: size.height }}
      position={position}
      onDragStop={handleDragStop}
      onResize={handleResize}
      bounds="parent"
      minWidth={50}
      minHeight={30}
      enableResizing={{
        top: true,
        right: true,
        bottom: true,
        left: true,
        topRight: true,
        bottomRight: true,
        bottomLeft: true,
        topLeft: true,
      }}
      className={`${isSelected ? 'border-blue-500 shadow-lg' : 'border-gray-300'} border rounded-md bg-white`}
      onClick={handleFocus}
    >
      <div
        ref={contentRef}
        contentEditable
        suppressContentEditableWarning
        className="w-full h-full overflow-auto outline-none cursor-text p-2 text-gray-800"
        style={{
          fontSize: `${fontSize}px`,
          textAlign: textAlign,
          whiteSpace: 'pre-wrap',
          overflowWrap: 'break-word',
          wordBreak: 'break-word',
          minHeight: '100%',
        }}
        onFocus={handleFocus}
      >
        Edit me...
      </div>
    </Rnd>
  );
};

export default TextBox;
