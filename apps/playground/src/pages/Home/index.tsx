import { Box } from '@aciole/acyon';
import './styles.css';
import { InstallationPage } from './components/InstallationPage';
import { OverviewPage } from './components/OverviewPage';
import { UsagePage } from './components/UsagePage';

export type HomeRouteId = 'home-overview' | 'home-installation' | 'home-usage';

export interface HomeRoute {
  id: HomeRouteId;
  name: string;
  icon: 'home' | 'download' | 'book';
}

export const homeRoutes: HomeRoute[] = [
  { id: 'home-overview', name: 'Visao Geral', icon: 'home' },
  { id: 'home-installation', name: 'Instalacao', icon: 'download' },
  { id: 'home-usage', name: 'Uso', icon: 'book' },
];

interface HomeProps {
  route: HomeRouteId;
}

export function Home({ route }: HomeProps) {
  return (
    <Box className="home-page">
      {route === 'home-installation' ? <InstallationPage /> : null}
      {route === 'home-usage' ? <UsagePage /> : null}
      {route === 'home-overview' ? <OverviewPage /> : null}
    </Box>
  );
}
