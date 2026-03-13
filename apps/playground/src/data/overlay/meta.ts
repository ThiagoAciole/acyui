import type { ComponentMeta } from '../types';

export const overlayMeta: ComponentMeta[] = [
  { id: 'modal', name: 'Modal', category: 'overlay', icon: 'app-window', description: 'Dialogo modal para acoes focadas.' },
  { id: 'drawer', name: 'Drawer', category: 'overlay', icon: 'panel-left', description: 'Painel deslizante para fluxos secundarios.' },
  { id: 'dropdown', name: 'Dropdown', category: 'overlay', icon: 'more-horizontal', description: 'Menu contextual acionado por um trigger customizavel.' },
  { id: 'tooltip', name: 'Tooltip', category: 'overlay', icon: 'message-circle', description: 'Ajuda contextual em hover ou foco.' },
];
