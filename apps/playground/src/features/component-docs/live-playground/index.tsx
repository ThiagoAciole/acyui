import { Icon } from '@aciole/acyon';
import { useEffect, useState } from 'react';
import { PlaygroundPreview } from './playground-preview';
import './styles.css';

interface LivePlaygroundProps {
  category: string;
  element: React.ReactNode;
  error: string | null;
}

export function LivePlayground({ category, element, error }: LivePlaygroundProps) {
  const [previewTone, setPreviewTone] = useState<'grid' | 'solid'>('grid');

  useEffect(() => {
    setPreviewTone('grid');
  }, [category]);

  return (


    <div className={`component-playground__preview-shell component-playground__preview-shell--${previewTone}`}>
      <div className="component-playground__canvas-actions">
        <div className="component-playground__tone-switch">
          <button
            type="button"
            className={`component-playground__tone-button ${previewTone === 'grid' ? 'component-playground__tone-button--active' : ''}`}
            onClick={() => setPreviewTone('grid')}
            aria-label="Fundo em grade"
          >
            <Icon name="grid" size={14} />
          </button>
          <button
            type="button"
            className={`component-playground__tone-button ${previewTone === 'solid' ? 'component-playground__tone-button--active' : ''}`}
            onClick={() => setPreviewTone('solid')}
            aria-label="Fundo liso"
          >
            <Icon name="square" size={14} />
          </button>
        </div>
      </div>

      <PlaygroundPreview element={element} error={error} />
    </div>

  );
}
