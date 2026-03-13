import { Box } from '@aciole/acyon';
import type { AnyComponentDefinition } from '../../registry/types';
import { ComponentHeader } from './component-header';
import { LivePlayground } from './live-playground';
import './component-page.css';

interface ComponentPageProps {
  definition: AnyComponentDefinition;
}

export function ComponentPage({ definition }: ComponentPageProps) {
  return (
    <Box as="section" className="component-page">
      <ComponentHeader definition={definition} />

      <Box className="component-page__playground">
        <LivePlayground definition={definition} />
      </Box>
    </Box>
  );
}
