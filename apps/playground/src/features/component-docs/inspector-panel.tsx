import type { ReactNode } from 'react';
import './inspector-panel.css';

interface InspectorPanelProps {
  children: ReactNode;
}

export function InspectorPanel({ children }: InspectorPanelProps) {
  return (
    <aside className="inspector-panel inspector-panel--right">
      <div className="inspector-panel__content">
        {children}
      </div>
    </aside>
  );
}
