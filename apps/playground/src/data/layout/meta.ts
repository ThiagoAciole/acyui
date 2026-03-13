import type { ComponentMeta } from '../types';

export const layoutMeta: ComponentMeta[] = [
  { id: 'box', name: 'Box', category: 'layout', icon: 'box', description: 'Bloco base de composicao para layout e espacamento.' },
  { id: 'container', name: 'Container', category: 'layout', icon: 'box', description: 'Limita largura e centraliza conteudo.' },
  { id: 'divider', name: 'Divider', category: 'layout', icon: 'minus', description: 'Separador visual entre blocos relacionados.' },
  { id: 'flex', name: 'Flex', category: 'layout', icon: 'align-horizontal', description: 'Layout flexivel para alinhamento e distribuicao.' },
  { id: 'grid', name: 'Grid', category: 'layout', icon: 'grid', description: 'Composicao em colunas responsivas.' },
  { id: 'page-header', name: 'PageHeader', category: 'layout', icon: 'heading1', description: 'Cabecalho de pagina com contexto e acoes.' },
  { id: 'sidebar', name: 'Sidebar', category: 'layout', icon: 'panel-left', description: 'Estrutura lateral para navegacao persistente.' },
  { id: 'spacer', name: 'Spacer', category: 'layout', icon: 'ruler', description: 'Espacador declarativo entre elementos.' },
];
