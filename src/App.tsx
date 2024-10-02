import Workspace from '@/components/Workspace';
import LayersPanel from '@/components/LayersPanel';
import MenuBar from '@/components/MenuBar';
import OptionBar from '@/components/OptionBar';
import ToolsPanel from '@/components/ToolsPanel';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

function App() {
  return (
    <div className="flex flex-col h-screen"     >
      <MenuBar />
      <OptionBar />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-16 border-r">
          <ToolsPanel />
        </div>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel className="flex-1 flex items-center justify-center overflow-auto bg-gray-100">
              <Workspace />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <div className="flex-1 flex justify-center">
              <LayersPanel />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}

export default App;