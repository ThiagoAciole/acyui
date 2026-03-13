import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ComponentPage } from '../features/component-docs/component-page';
import { HomePage } from '../features/home/home-page';
import { componentDefinitionsById } from '../registry';
import { AppShell } from './app-shell';
import { HOME_DEFAULT_ROUTE, resolveRoute } from './router';

export function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentRouteId = useMemo(() => {
    const route = location.pathname.replace(/^\/+/, '').trim();
    return route || HOME_DEFAULT_ROUTE;
  }, [location.pathname]);
  const route = resolveRoute(currentRouteId);

  return (
    <AppShell
      currentRouteId={currentRouteId}
      sidebarCollapsed={sidebarCollapsed}
      onSidebarToggle={setSidebarCollapsed}
      onNavigate={(routeId) => navigate(routeId === HOME_DEFAULT_ROUTE ? '/' : `/${routeId}`)}
    >
      {route.type === 'home' ? (
        <HomePage route={route.route.id} />
      ) : (
        <ComponentPage definition={componentDefinitionsById[route.componentId]} />
      )}
    </AppShell>
  );
}
