import { Icon, IconButton } from '@aciole/acyon';
import { useEffect, useState } from 'react';
import type { AnyComponentDefinition } from '../../../registry/types';
import { PlaygroundCode } from './playground-code';
import { PlaygroundControls } from './playground-controls';
import { PlaygroundPreview } from './playground-preview';
import { usePlaygroundState } from './use-playground-state';
import './styles.css';

type PlaygroundTab = 'preview' | 'code';

export function LivePlayground({ definition }: { definition: AnyComponentDefinition }) {
  const [activeTab, setActiveTab] = useState<PlaygroundTab>('preview');
  const { code, controls, preview, propsState, reset, setValue } = usePlaygroundState(definition);

  useEffect(() => {
    setActiveTab('preview');
  }, [definition.id]);

  return (
    <div className="component-playground">
      <div className="component-playground__main">
        <div className="component-playground__toolbar">
          <div className="component-playground__tabs">
            <button
              type="button"
              className={`component-playground__tab ${activeTab === 'preview' ? 'component-playground__tab--active' : ''}`}
              onClick={() => setActiveTab('preview')}
            >
              Preview
            </button>
            <button
              type="button"
              className={`component-playground__tab ${activeTab === 'code' ? 'component-playground__tab--active' : ''}`}
              onClick={() => setActiveTab('code')}
            >
              Code
            </button>
          </div>

          <IconButton
            aria-label="Copiar codigo"
            icon={<Icon name="copy" size={16} />}
            onClick={() => navigator.clipboard?.writeText(code)}
            variant="ghost"
            size="small"
          />
        </div>

        {activeTab === 'preview' ? (
          <PlaygroundPreview element={preview.element} error={preview.error} />
        ) : (
          <PlaygroundCode code={code} />
        )}
      </div>

      <PlaygroundControls
        controls={controls}
        propsState={propsState}
        onChange={setValue}
        onReset={reset}
      />
    </div>
  );
}
