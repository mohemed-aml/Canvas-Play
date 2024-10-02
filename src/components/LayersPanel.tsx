// src/components/LayersPanel.tsx
import React from 'react';

const LayersPanel: React.FC = () => {
  return (
    <div className="p-2">
      <h2 className="font-bold mb-2">Layers</h2>
      <ul className="space-y-1">
        {/* Placeholder layers */}
        <li className="p-2 bg-gray-200 rounded">Background</li>
        <li className="p-2 bg-gray-200 rounded">Layer 1</li>
        <li className="p-2 bg-gray-200 rounded">Layer 2</li>
      </ul>
    </div>
  );
};

export default LayersPanel;
