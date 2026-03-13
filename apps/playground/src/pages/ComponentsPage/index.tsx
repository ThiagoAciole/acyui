import { Badge, Box, PageHeader } from '@aciole/acyon';
import { LivePlayground } from '../../components/LivePlayground';
import type { ComponentMeta } from '../../data/types';
import './styles.css';

interface ComponentPageProps {
  route: ComponentMeta;
}

export function ComponentPage({ route }: ComponentPageProps) {
  return (
    <Box as="section" className="component-page">
      <PageHeader
        title={route.name}
        description={route.description}
        action={<Badge>{route.category}</Badge>}
      />

      <Box className="component-page__playground">
        <LivePlayground route={route} />
      </Box>
    </Box>
  );
}
