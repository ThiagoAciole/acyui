import type { IconName } from '@aciole/acyon';

export type Category =
  | 'Typography'
  | 'Form'
  | 'DataDisplay'
  | 'Navigation'
  | 'Feedback'
  | 'Overlay'
  | 'Layout';

export interface ComponentRoute {
  id: string;
  name: string;
  category: Category;
  icon: IconName;
  description: string;
}

export const componentCategories: Category[] = [
  'Typography',
  'Form',
  'DataDisplay',
  'Navigation',
  'Feedback',
  'Overlay',
  'Layout',
];

export const componentRoutes: ComponentRoute[] = [
  { id: 'accordion', name: 'Accordion', category: 'DataDisplay', icon: 'list-collapse', description: 'Secoes expansivas para organizacao progressiva de conteudo.' },
  { id: 'alert', name: 'Alert', category: 'Feedback', icon: 'alert-triangle', description: 'Mensagens contextuais para destaque de estados e informacoes.' },
  { id: 'avatar', name: 'Avatar', category: 'DataDisplay', icon: 'user-circle', description: 'Representacao visual de pessoas e entidades.' },
  { id: 'badge', name: 'Badge', category: 'DataDisplay', icon: 'badge', description: 'Indicadores compactos para status e taxonomia.' },
  { id: 'box', name: 'Box', category: 'Layout', icon: 'box', description: 'Bloco base de composicao para layout e espacamento.' },
  { id: 'breadcrumb', name: 'Breadcrumb', category: 'Navigation', icon: 'milestone', description: 'Trilha de navegacao hierarquica.' },
  { id: 'button', name: 'Button', category: 'Form', icon: 'rectangle-horizontal', description: 'Acionador principal para acoes e comandos.' },
  { id: 'card', name: 'Card', category: 'DataDisplay', icon: 'panel-top', description: 'Container de conteudo agrupado.' },
  { id: 'checkbox', name: 'Checkbox', category: 'Form', icon: 'check-square', description: 'Selecao booleana independente.' },
  { id: 'code', name: 'Code', category: 'Typography', icon: 'code', description: 'Estilo inline para snippets e tokens tecnicos.' },
  { id: 'container', name: 'Container', category: 'Layout', icon: 'box', description: 'Limita largura e centraliza conteudo.' },
  { id: 'date-picker', name: 'DatePicker', category: 'Form', icon: 'calendar', description: 'Entrada de data com experiencia guiada.' },
  { id: 'divider', name: 'Divider', category: 'Layout', icon: 'minus', description: 'Separador visual entre blocos relacionados.' },
  { id: 'dropdown', name: 'Dropdown', category: 'Overlay', icon: 'more-horizontal', description: 'Menu contextual acionado por um trigger customizavel.' },
  { id: 'drawer', name: 'Drawer', category: 'Overlay', icon: 'panel-left', description: 'Painel deslizante para fluxos secundarios.' },
  { id: 'empty-state', name: 'EmptyState', category: 'DataDisplay', icon: 'ghost', description: 'Mensagem orientada para estados sem dados.' },
  { id: 'file-upload', name: 'FileUpload', category: 'Form', icon: 'upload-cloud', description: 'Entrada de arquivos com dropzone e validacao.' },
  { id: 'flex', name: 'Flex', category: 'Layout', icon: 'align-horizontal', description: 'Layout flexivel para alinhamento e distribuicao.' },
  { id: 'grid', name: 'Grid', category: 'Layout', icon: 'grid', description: 'Composicao em colunas responsivas.' },
  { id: 'heading', name: 'Heading', category: 'Typography', icon: 'heading1', description: 'Titulos com escala tipografica consistente.' },
  { id: 'icon-button', name: 'IconButton', category: 'Form', icon: 'mouse-pointer', description: 'Botao compacto orientado por iconografia.' },
  { id: 'image', name: 'Image', category: 'DataDisplay', icon: 'image', description: 'Renderizacao de imagens com estilos padronizados.' },
  { id: 'input', name: 'Input', category: 'Form', icon: 'text-cursor', description: 'Campo de texto padronizado.' },
  { id: 'link', name: 'Link', category: 'Typography', icon: 'link', description: 'Links com semantica e estilo consistentes.' },
  { id: 'list', name: 'List', category: 'DataDisplay', icon: 'list', description: 'Agrupamento vertical de itens relacionados.' },
  { id: 'loader', name: 'Loader', category: 'Feedback', icon: 'loader2', description: 'Indicador visual de carregamento.' },
  { id: 'modal', name: 'Modal', category: 'Overlay', icon: 'app-window', description: 'Dialogo modal para acoes focadas.' },
  { id: 'multi-select', name: 'MultiSelect', category: 'Form', icon: 'list-checks', description: 'Selecao multipla com lista controlada.' },
  { id: 'page-header', name: 'PageHeader', category: 'Layout', icon: 'heading1', description: 'Cabecalho de pagina com contexto e acoes.' },
  { id: 'pagination', name: 'Pagination', category: 'Navigation', icon: 'more-horizontal', description: 'Navegacao paginada entre colecoes.' },
  { id: 'progress', name: 'Progress', category: 'Feedback', icon: 'activity', description: 'Indicador de progresso linear.' },
  { id: 'radio', name: 'Radio', category: 'Form', icon: 'circle-dot', description: 'Selecao exclusiva entre opcoes.' },
  { id: 'search', name: 'Search', category: 'Form', icon: 'search', description: 'Campo de busca com affordance dedicada.' },
  { id: 'select', name: 'Select', category: 'Form', icon: 'list-filter', description: 'Selecao simples em lista.' },
  { id: 'sidebar', name: 'Sidebar', category: 'Layout', icon: 'panel-left', description: 'Estrutura lateral para navegacao persistente.' },
  { id: 'skeleton', name: 'Skeleton', category: 'Feedback', icon: 'component', description: 'Placeholder visual para carregamento de conteudo.' },
  { id: 'slider', name: 'Slider', category: 'Form', icon: 'sliders-horizontal', description: 'Controle de faixa numerica.' },
  { id: 'spacer', name: 'Spacer', category: 'Layout', icon: 'ruler', description: 'Espacador declarativo entre elementos.' },
  { id: 'switch', name: 'Switch', category: 'Form', icon: 'toggle-right', description: 'Alternancia binaria para configuracoes.' },
  { id: 'table', name: 'Table', category: 'DataDisplay', icon: 'table', description: 'Apresentacao tabular de dados.' },
  { id: 'tabs', name: 'Tabs', category: 'Navigation', icon: 'folder', description: 'Alternancia entre paines relacionados.' },
  { id: 'tag', name: 'Tag', category: 'DataDisplay', icon: 'tag', description: 'Rotulos compactos para categorizacao.' },
  { id: 'text', name: 'Text', category: 'Typography', icon: 'type', description: 'Texto base com controle de hierarquia visual.' },
  { id: 'text-area', name: 'TextArea', category: 'Form', icon: 'form-input', description: 'Campo multi-linha para entradas longas.' },
  { id: 'timeline', name: 'Timeline', category: 'DataDisplay', icon: 'git-commit', description: 'Sequencia temporal de eventos ou etapas.' },
  { id: 'toast', name: 'Toast', category: 'Feedback', icon: 'message-square', description: 'Sistema de feedback efemero consumido via useToast e disponibilizado pelo ThemeProvider.' },
  { id: 'tooltip', name: 'Tooltip', category: 'Overlay', icon: 'message-circle', description: 'Ajuda contextual em hover ou foco.' },
  { id: 'top-bar', name: 'TopBar', category: 'Navigation', icon: 'layout-template', description: 'Cabecalho superior para navegacao e contexto global.' },
];
