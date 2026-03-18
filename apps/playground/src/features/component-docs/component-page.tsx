import { Box } from 'acioleui';
import type { AnyComponentDefinition } from '../../registry/types';
import { ComponentHeader } from './component-header';
import { InspectorPanel } from './inspector-panel';
import { LivePlayground } from './live-playground';
import { PlaygroundControls } from './live-playground/playground-controls';
import { usePlaygroundState } from './live-playground/use-playground-state';
import './component-page.css';

interface ComponentPageProps {
  definition: AnyComponentDefinition;
}

export function ComponentPage({ definition }: ComponentPageProps) {
  const { code, controls, preview, propsState, reset, setValue } = usePlaygroundState(definition);

  return (
    <Box as="section" className="component-page">
      <Box className="component-page__content">
        <Box className="component-page__main">
          <ComponentHeader definition={definition} />

          <Box className="component-page__playground">
            <LivePlayground
              category={definition.category}
              element={preview.element}
              error={preview.error}
            />
          </Box>
        </Box>

        <InspectorPanel>
          <PlaygroundControls
            code={code}
            controls={controls}
            propsState={propsState}
            onChange={setValue}
            onReset={reset}
            name={definition.name}
          />
        </InspectorPanel>
      </Box>
    </Box>
  );
}
