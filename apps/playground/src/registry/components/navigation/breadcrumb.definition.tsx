import * as Labs from 'acioleui';
import { wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type BreadcrumbPlaygroundProps = {
  separator: '/' | '>' | '-';
  currentLabel: string;
};

const breadcrumbDefinition: ComponentDefinition<BreadcrumbPlaygroundProps> = defineComponent<BreadcrumbPlaygroundProps>({
  id: 'breadcrumb',
  name: 'Breadcrumb',
  category: 'navigation',
  icon: 'milestone',
  description: 'Trilha de navegacao hierarquica.',
  playground: {
    initialProps: {
      separator: '/',
      currentLabel: 'Breadcrumb',
    },
    controls: [
      { type: 'select', name: 'separator', label: 'Separator', options: [{ label: '/', value: '/' }, { label: '>', value: '>' }, { label: '-', value: '-' }] },
      { type: 'text', name: 'currentLabel', label: 'Current label', placeholder: 'Breadcrumb' },
    ],
    render: (props) => <Labs.Breadcrumb separator={props.separator} items={[{ label: 'Inicio', href: '/' }, { label: 'Componentes' }, { label: props.currentLabel }]} />,
    code: (props) => wrapSnippet(['Breadcrumb'], [
      'return (',
      '  <Breadcrumb',
      '    items={[',
      "      { label: 'Inicio', href: '/' },",
      "      { label: 'Componentes' },",
      `      { label: '${props.currentLabel}' },`,
      '    ]}',
      `    separator="${props.separator}"`,
      '  />',
      ');',
    ]),
  },
});

export default breadcrumbDefinition;
