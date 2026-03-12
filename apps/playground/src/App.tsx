import { useEffect, useState } from 'react';

import {
  Box,
  Container,
  Flex,
  Icon,
  Sidebar,
  TopBar,
  useTheme
} from 'acyon';
import type { ReactNode } from 'react';

import icon from './assets/icon.svg';
import logoLight from './assets/logo-light.svg';
import logoDark from './assets/logo-dark.svg';

import { componentCategories, componentRoutes } from './data/componentRoutes';
import { ComponentPage } from './pages/ComponentsPage';
import { Dashboard } from './pages/Dashboard';

const DASHBOARD_ROUTE = 'dashboard';

const sidebarItemIcons: Record<string, ReactNode> = {
  heading: <Icon name="edit" size={16} />,
  text: <Icon name="edit" size={16} />,
  code: <Icon name="edit" size={16} />,
  'icon-button': <Icon name="zap" size={16} />,
  link: <Icon name="external-link" size={16} />,
  button: <Icon name="minus" size={16} />,
  input: <Icon name="edit" size={16} />,
  'text-area': <Icon name="file" size={16} />,
  search: <Icon name="search" size={16} />,
  select: <Icon name="minus" size={16} />,
  'multi-select': <Icon name="check" size={16} />,
  checkbox: <Icon name="check" size={16} />,
  radio: <Icon name="plus" size={16} />,
  switch: <Icon name="minus" size={16} />,
  slider: <Icon name="settings" size={16} />,
  'date-picker': <Icon name="calendar" size={16} />,
  'file-upload': <Icon name="upload" size={16} />,
  list: <Icon name="list" size={16} />,
  avatar: <Icon name="plus" size={16} />,
  badge: <Icon name="shield" size={16} />,
  tag: <Icon name="warning" size={16} />,
  table: <Icon name="layout" size={16} />,
  timeline: <Icon name="activity" size={16} />,
  accordion: <Icon name="check" size={16} />,
  'empty-state': <Icon name="warning" size={16} />,
  image: <Icon name="file" size={16} />,
  card: <Icon name="minus" size={16} />,
  breadcrumb: <Icon name="arrow-right" size={16} />,
  tabs: <Icon name="book" size={16} />,
  pagination: <Icon name="more-horizontal" size={16} />,
  'top-bar': <Icon name="layout" size={16} />,
  toast: <Icon name="file" size={16} />,
  loader: <Icon name="activity" size={16} />,
  progress: <Icon name="activity" size={16} />,
  skeleton: <Icon name="zap" size={16} />,
  modal: <Icon name="book" size={16} />,
  drawer: <Icon name="book" size={16} />,
  tooltip: <Icon name="external-link" size={16} />,
  container: <Icon name="box" size={16} />,
  flex: <Icon name="align-horizontal" size={16} />,
  grid: <Icon name="layout" size={16} />,
  sidebar: <Icon name="layout" size={16} />,
  spacer: <Icon name="minus" size={16} />,
  divider: <Icon name="minus" size={16} />,
  'page-header': <Icon name="edit" size={16} />,
  box: <Icon name="box" size={16} />,
  'form-field': <Icon name="edit" size={16} />,
  'theme-provider': <Icon name="moon" size={16} />,
};

function getRouteFromHash() {
  const route = window.location.hash.replace(/^#\/?/, '').trim();
  return route || DASHBOARD_ROUTE;
}

export function App() {
  const [currentPage, setCurrentPage] = useState<string>(getRouteFromHash);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const syncRoute = () => setCurrentPage(getRouteFromHash());

    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  const navigateTo = (routeId: string) => {
    window.location.hash = routeId === DASHBOARD_ROUTE ? '/' : `/${routeId}`;
  };

  const currentRoute =
    currentPage === DASHBOARD_ROUTE
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
          <Sidebar.Item
            icon={<Icon name="home" size={18} />}
            active={currentPage === DASHBOARD_ROUTE}
            onClick={() => navigateTo(DASHBOARD_ROUTE)}
          >
            Inicio
          </Sidebar.Item>

          {componentCategories.map((category) => {
            const routes = componentRoutes.filter((route) => route.category === category);
            if (routes.length === 0) return null;

            return (
              <Sidebar.Group key={category} title={category} defaultOpen>
                {routes.map((route) => (
                  <Sidebar.Item
                    key={route.id}
                    icon={sidebarItemIcons[route.id] ?? <Icon name="layout" size={16} />}
                    active={currentPage === route.id}
                    onClick={() => navigateTo(route.id)}
                    style={{ paddingLeft: sidebarCollapsed ? 'var(--space-3)' : 'var(--space-4)' }}
                  >
                    {route.name}
                  </Sidebar.Item>
                ))}
              </Sidebar.Group>
            );
          })}
        </Box>

        <Sidebar.Footer>
          <Sidebar.Item
            icon={theme === 'light' ? <Icon name="moon" size={18} /> : <Icon name="sun" size={18} />}
            onClick={toggleTheme}
          >
            {theme === 'light' ? 'Escuro' : 'Claro'}
          </Sidebar.Item>
        </Sidebar.Footer>
      </Sidebar>
      <Flex direction="column" className="showcase-content">
        <TopBar sticky themeToggle={true} />
        <Container size="full">
          {currentRoute ? <ComponentPage route={currentRoute} /> : <Dashboard />}
        </Container>
      </Flex>
    </Flex>
  );
}
