import * as Labs from '@aciole/acyon';
import { wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type EmptyStatePlaygroundProps = {
  title: string;
  description: string;
  actionLabel: string;
};

const emptyStateDefinition: ComponentDefinition<EmptyStatePlaygroundProps> = defineComponent<EmptyStatePlaygroundProps>({
  id: 'empty-state',
  name: 'EmptyState',
  category: 'data-display',
  icon: 'ghost',
  description: 'Mensagem orientada para estados sem dados.',
  playground: {
    initialProps: {
      title: 'Sem itens',
      description: 'Nenhum item encontrado para esse filtro.',
      actionLabel: 'Criar item',
    },
    controls: [
      { type: 'text', name: 'title', label: 'Title', placeholder: 'Sem itens' },
      { type: 'textarea', name: 'description', label: 'Description', placeholder: 'Nenhum item encontrado.' },
      { type: 'text', name: 'actionLabel', label: 'Action label', placeholder: 'Criar item' },
    ],
    render: (props) => (
      <Labs.EmptyState
        icon={<Labs.GhostIcon size={20} />}
        title={props.title}
        description={props.description}
        action={<Labs.Button>{props.actionLabel}</Labs.Button>}
      />
    ),
    code: (props) => wrapSnippet(['EmptyState', 'Button', 'GhostIcon'], [
      'return (',
      '  <EmptyState',
      '    icon={<GhostIcon size={20} />}',
      `    title="${props.title}"`,
      `    description="${props.description}"`,
      `    action={<Button>${props.actionLabel}</Button>}`,
      '  />',
      ');',
    ]),
  },
});

export default emptyStateDefinition;
