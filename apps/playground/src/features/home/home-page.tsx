import { Box } from '@aciole/acyon';
import type { HomeRouteId } from '../../app/router';
import './home-page.css';
import { InstallationSection } from './sections/installation-section';
import { OverviewSection } from './sections/overview-section';
import { UsageSection } from './sections/usage-section';

interface HomePageProps {
  route: HomeRouteId;
}

export function HomePage({ route }: HomePageProps) {
  return (
    <Box className="home-page">
      {route === 'home-installation' ? <InstallationSection /> : null}
      {route === 'home-usage' ? <UsageSection /> : null}
      {route === 'home-overview' ? <OverviewSection /> : null}
    </Box>
  );
}
