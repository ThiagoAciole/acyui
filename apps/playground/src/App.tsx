import { useEffect, useState } from 'react';

import {
  Box,
  Container,
  Flex,
  Icon,
  Sidebar,
  TopBar,
  useTheme
} from '@aciole/acyon';

import icon from './assets/icon.svg';
import logoDark from './assets/logo-dark.svg';
import logoLight from './assets/logo-light.svg';

import { componentCategories, componentRoutes } from './data/componentRoutes';
import { ComponentPage } from './pages/ComponentsPage';
import { Home, homeRoutes } from './pages/Home';

const HOME_DEFAULT_ROUTE = 'home-overview';
const categoryIcons = {
  Typography: 'type',
  Form: 'form-input',
  DataDisplay: 'database',
  Navigation: 'external-link',
  Feedback: 'message-square',
  Overlay: 'panel-left',
  Layout: 'layout-template',
} as const;

function getRouteFromHash() {
  const route = window.location.hash.replace(/^#\/?/, '').trim();
  return route || HOME_DEFAULT_ROUTE;
}

export function App() {
  const [currentPage, setCurrentPage] = useState<string>(getRouteFromHash);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const syncRoute = () => setCurrentPage(getRouteFromHash());

    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  const navigateTo = (routeId: string) => {
    window.location.hash = routeId === HOME_DEFAULT_ROUTE ? '/' : `/${routeId}`;
  };

  const currentHomeRoute = homeRoutes.find((route) => route.id === currentPage) ?? null;
  const currentRoute =
    currentHomeRoute
      ? null
      : componentRoutes.find((route) => route.id === currentPage) ?? null;

  return (
    <Flex style={{ height: '100vh', overflow: 'hidden' }}>
      <Sidebar collapsed={sidebarCollapsed} onToggle={setSidebarCollapsed}>
        <Sidebar.Header
          icon={<img src={icon} alt="LabsUI Icon" style={{ height: '24px' }} />}
          logo={<img src={theme === 'light' ? logoLight : logoDark} alt="LabsUI Logo" style={{ height: '16px' }} />}
        />

        <Box style={{ padding: 'var(--space-2)', overflowY: 'auto', flex: 1 }}>
          <Sidebar.Group title="Home" leftIcon={<Icon name="home" size={16} />} defaultOpen>
            {homeRoutes.map((route) => (
              <Sidebar.Item
                key={route.id}
                icon={<Icon name={route.icon} size={16} />}
                active={currentPage === route.id}
                onClick={() => navigateTo(route.id)}
              >
                {route.name}
              </Sidebar.Item>
            ))}
          </Sidebar.Group>

          {componentCategories.map((category) => {
            const routes = componentRoutes.filter((route) => route.category === category);
            if (routes.length === 0) return null;

            return (
              <Sidebar.Group
                key={category}
                title={category}
                leftIcon={<Icon name={categoryIcons[category]} size={16} />}
                defaultOpen
              >
                {routes.map((route) => (
                  <Sidebar.Item
                    key={route.id}
                    icon={<Icon name={route.icon} size={16} />}
                    active={currentPage === route.id}
                    onClick={() => navigateTo(route.id)}
                  >
                    {route.name}
                  </Sidebar.Item>
                ))}
              </Sidebar.Group>
            );
          })}
        </Box>

      </Sidebar>
      <Flex direction="column" className="showcase-content">
        <TopBar sticky themeToggle={true} />
        <Container size="full">
          {currentRoute ? <ComponentPage route={currentRoute} /> : <Home route={currentHomeRoute?.id ?? HOME_DEFAULT_ROUTE} />}
        </Container>
      </Flex>
    </Flex>
  );
}
