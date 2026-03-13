import { Badge, PageHeader } from '@aciole/acyon';
import type { AnyComponentDefinition } from '../../registry/types';

interface ComponentHeaderProps {
  definition: AnyComponentDefinition;
}

export function ComponentHeader({ definition }: ComponentHeaderProps) {
  return (
    <PageHeader
      title={definition.name}
      description={definition.description}
      action={<Badge>{definition.category}</Badge>}
    />
  );
}
