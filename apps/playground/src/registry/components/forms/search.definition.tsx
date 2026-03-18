import * as Labs from 'acioleui';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';
import { buildOpeningTag, wrapSnippet } from '../../../shared/playground/playground-helpers';

type SearchPlaygroundProps = Pick<Labs.SearchProps, 'label' | 'placeholder' | 'loading'>;

const initialProps: SearchPlaygroundProps = {
  label: 'Buscar',
  placeholder: 'Buscar componente',
  loading: false,
};

const searchDefinition: ComponentDefinition<SearchPlaygroundProps> = defineComponent({
  id: 'search',
  name: 'Search',
  category: 'forms',
  icon: 'search',
  description: 'Campo de busca com affordance dedicada.',
  playground: {
    initialProps,
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Buscar' },
      { type: 'text', name: 'placeholder', label: 'Placeholder', placeholder: 'Buscar componente' },
      { type: 'boolean', name: 'loading', label: 'Loading' },
    ],
    render: (props) => <Labs.Search label={String(props.label ?? '')} placeholder={String(props.placeholder ?? '')} loading={Boolean(props.loading)} full />,
    code: (props) => wrapSnippet(['Search'], [
      'return (',
      `  ${buildOpeningTag('Search', props as Record<string, unknown>)} />`,
      ');',
    ]),
  },
});

export default searchDefinition;
