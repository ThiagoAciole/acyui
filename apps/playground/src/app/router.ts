import { componentDefinitionsById } from '../registry';

export type HomeRouteId = 'home-overview' | 'home-installation' | 'home-usage';

export interface HomeRoute {
  id: HomeRouteId;
  name: string;
  icon: 'home' | 'download' | 'book';
}

export const HOME_DEFAULT_ROUTE: HomeRouteId = 'home-overview';

export const homeRoutes: HomeRoute[] = [
  { id: 'home-overview', name: 'Visao Geral', icon: 'home' },
  { id: 'home-installation', name: 'Instalacao', icon: 'download' },
  { id: 'home-usage', name: 'Uso', icon: 'book' },
];

export type AppRoute =
  | { type: 'home'; route: HomeRoute }
  | { type: 'component'; route: string; componentId: string };

function getHashRoute() {
  return window.location.pathname.replace(/^\/+/, '').trim();
}

export function resolveRoute(routeId = getHashRoute()): AppRoute {
  const normalized = routeId || HOME_DEFAULT_ROUTE;
  const homeRoute = homeRoutes.find((route) => route.id === normalized);

  if (homeRoute) {
    return { type: 'home', route: homeRoute };
  }

  const component = componentDefinitionsById[normalized];
  if (component) {
    return { type: 'component', route: normalized, componentId: component.id };
  }

  return { type: 'home', route: homeRoutes[0] };
}

export function navigateTo(routeId: string) {
  window.history.pushState({}, '', routeId === HOME_DEFAULT_ROUTE ? '/' : `/${routeId}`);
}
