import * as Labs from '@aciole/acyon';
import { wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type PageHeaderPlaygroundProps = {
  title: string;
  description: string;
  showBack: boolean;
};

const pageHeaderDefinition: ComponentDefinition<PageHeaderPlaygroundProps> = defineComponent<PageHeaderPlaygroundProps>({
  id: 'page-header',
  name: 'PageHeader',
  category: 'layout',
  icon: 'heading1',
  description: 'Cabecalho de pagina com contexto e acoes.',
  playground: {
    initialProps: {
      title: 'PageHeader',
      description: 'Descricao da pagina',
      showBack: false,
    },
    controls: [
      { type: 'text', name: 'title', label: 'Title', placeholder: 'PageHeader' },
      { type: 'textarea', name: 'description', label: 'Description', placeholder: 'Descricao da pagina' },
      { type: 'boolean', name: 'showBack', label: 'Show back button' },
    ],
    render: (props) => <Labs.PageHeader title={props.title} description={props.description} showBack={props.showBack} action={<Labs.Button>Salvar</Labs.Button>} />,
    code: (props) => wrapSnippet(['Button', 'PageHeader'], [
      'return (',
      '  <PageHeader',
      `    title="${props.title}"`,
      `    description="${props.description}"`,
      `${props.showBack ? '    showBack' : ''}`,
      '    action={<Button>Salvar</Button>}',
      '  />',
      ');',
    ].filter(Boolean)),
  },
});

export default pageHeaderDefinition;
