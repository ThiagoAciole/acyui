import type { ComponentMeta } from '../types';

export const navigationMeta: ComponentMeta[] = [
  { id: 'breadcrumb', name: 'Breadcrumb', category: 'navigation', icon: 'milestone', description: 'Trilha de navegacao hierarquica.' },
  { id: 'pagination', name: 'Pagination', category: 'navigation', icon: 'more-horizontal', description: 'Navegacao paginada entre colecoes.' },
  { id: 'tabs', name: 'Tabs', category: 'navigation', icon: 'folder', description: 'Alternancia entre paines relacionados.' },
  { id: 'top-bar', name: 'TopBar', category: 'navigation', icon: 'layout-template', description: 'Cabecalho superior para navegacao e contexto global.' },
];
