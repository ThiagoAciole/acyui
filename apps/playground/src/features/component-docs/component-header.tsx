import { Box, PageHeader } from 'acioleui';
import type { AnyComponentDefinition } from '../../registry/types';

interface ComponentHeaderProps {
  definition: AnyComponentDefinition;
}

export function ComponentHeader({ definition }: ComponentHeaderProps) {
  return (
    <Box className="component-header">
      <PageHeader
        title={definition.name}
        description={definition.description}
      />

    </Box>
  );
}
