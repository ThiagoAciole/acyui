import { Container } from '@aciole/acyon';
import { useEffect, useState } from 'react';
import { ComponentPage } from '../features/component-docs/component-page';
import { HomePage } from '../features/home/home-page';
import { componentDefinitionsById } from '../registry';
import { AppShell } from './app-shell';
import { HOME_DEFAULT_ROUTE, navigateTo, resolveRoute } from './router';

function getCurrentRouteId() {
  const route = window.location.hash.replace(/^#\/?/, '').trim();
  return route || HOME_DEFAULT_ROUTE;
}

export function App() {
  const [currentRouteId, setCurrentRouteId] = useState<string>(getCurrentRouteId);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    const syncRoute = () => setCurrentRouteId(getCurrentRouteId());

    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  const route = resolveRoute(currentRouteId);

  return (
    <AppShell
      currentRouteId={currentRouteId}
      sidebarCollapsed={sidebarCollapsed}
      onSidebarToggle={setSidebarCollapsed}
      onNavigate={navigateTo}
    >
      <Container size="full">
        {route.type === 'home' ? (
          <HomePage route={route.route.id} />
        ) : (
          <ComponentPage definition={componentDefinitionsById[route.componentId]} />
        )}
      </Container>
    </AppShell>
  );
}
