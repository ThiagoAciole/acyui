import { Badge, Box, PageHeader } from 'acyon';
import { LivePlayground } from '../../components/LivePlayground';
import type { ComponentRoute } from '../../data/componentRoutes';
import './styles.css';

interface ComponentPageProps {
  route: ComponentRoute;
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
