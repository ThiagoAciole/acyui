import * as Labs from 'acioleui';
import { wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type PageHeaderPlaygroundProps = {
  title: string;
  description: string;
  showBack: boolean;
  showAction: boolean;
};

const pageHeaderDefinition: ComponentDefinition<PageHeaderPlaygroundProps> =
  defineComponent<PageHeaderPlaygroundProps>({
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
        showAction: true,
      },
      controls: [
        { type: 'text', name: 'title', label: 'Title', placeholder: 'PageHeader' },
        { type: 'textarea', name: 'description', label: 'Description', placeholder: 'Descricao da pagina' },
        { type: 'boolean', name: 'showBack', label: 'Show back button' },
        { type: 'boolean', name: 'showAction', label: 'Show action' },
      ],
      render: (props) => (
        <div style={{ width: '100%' }}>
          <Labs.PageHeader
            title={props.title}
            description={props.description}
            showBack={props.showBack}
            action={props.showAction ? <Labs.Button>Salvar</Labs.Button> : undefined}
          />
        </div>
      ),
      code: (props) =>
        wrapSnippet(
          ['Button', 'PageHeader'],
          [
            'return (',
            '  <div style={{ width: "100%" }}>',
            '    <PageHeader',
            `      title="${props.title}"`,
            `      description="${props.description}"`,
            props.showBack ? '      showBack' : '',
            props.showAction ? '      action={<Button>Salvar</Button>}' : '',
            '    />',
            '  </div>',
            ');',
          ].filter(Boolean),
        ),
    },
  });

export default pageHeaderDefinition;