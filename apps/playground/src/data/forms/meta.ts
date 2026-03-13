import type { ComponentMeta } from '../types';

export const formsMeta: ComponentMeta[] = [
  { id: 'button', name: 'Button', category: 'forms', icon: 'rectangle-horizontal', description: 'Acionador principal para acoes e comandos.' },
  { id: 'input', name: 'Input', category: 'forms', icon: 'text-cursor', description: 'Campo de texto padronizado.' },
  { id: 'text-area', name: 'TextArea', category: 'forms', icon: 'form-input', description: 'Campo multi-linha para entradas longas.' },
  { id: 'search', name: 'Search', category: 'forms', icon: 'search', description: 'Campo de busca com affordance dedicada.' },
  { id: 'select', name: 'Select', category: 'forms', icon: 'list-filter', description: 'Selecao simples em lista.' },
  { id: 'checkbox', name: 'Checkbox', category: 'forms', icon: 'check-square', description: 'Selecao booleana independente.' },
  { id: 'radio', name: 'Radio', category: 'forms', icon: 'circle-dot', description: 'Selecao exclusiva entre opcoes.' },
  { id: 'switch', name: 'Switch', category: 'forms', icon: 'toggle-right', description: 'Alternancia binaria para configuracoes.' },
  { id: 'icon-button', name: 'IconButton', category: 'forms', icon: 'mouse-pointer', description: 'Botao compacto orientado por iconografia.' },
  { id: 'file-upload', name: 'FileUpload', category: 'forms', icon: 'upload-cloud', description: 'Entrada de arquivos com dropzone e validacao.' },
  { id: 'multi-select', name: 'MultiSelect', category: 'forms', icon: 'list-checks', description: 'Selecao multipla com lista controlada.' },
  { id: 'slider', name: 'Slider', category: 'forms', icon: 'sliders-horizontal', description: 'Controle de faixa numerica.' },
  { id: 'date-picker', name: 'DatePicker', category: 'forms', icon: 'calendar', description: 'Entrada de data com experiencia guiada.' },
];
