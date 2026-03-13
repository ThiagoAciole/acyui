import { Box } from '@aciole/acyon';
import type { HomeRouteId } from '../../app/router';
import '../../pages/Home/styles.css';
import { InstallationPage } from '../../pages/Home/components/InstallationPage';
import { OverviewPage } from '../../pages/Home/components/OverviewPage';
import { UsagePage } from '../../pages/Home/components/UsagePage';

interface HomePageProps {
  route: HomeRouteId;
}

export function HomePage({ route }: HomePageProps) {
  return (
    <Box className="home-page">
      {route === 'home-installation' ? <InstallationPage /> : null}
      {route === 'home-usage' ? <UsagePage /> : null}
      {route === 'home-overview' ? <OverviewPage /> : null}
    </Box>
  );
}
