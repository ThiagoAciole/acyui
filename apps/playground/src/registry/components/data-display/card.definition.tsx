import * as Labs from 'acioleui';
import { wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type CardPlaygroundProps = {
  title: string;
  description: string;
  content: string;
  variant: 'default' | 'outlined';
  padding: 'sm' | 'md' | 'lg';
};

const cardDefinition: ComponentDefinition<CardPlaygroundProps> = defineComponent<CardPlaygroundProps>({
  id: 'card',
  name: 'Card',
  category: 'data-display',
  icon: 'panel-top',
  description: 'Container de conteudo agrupado.',
  playground: {
    initialProps: {
      title: 'Card title',
      description: 'Descricao complementar',
      content: 'Conteudo de exemplo em um card.',
      variant: 'default',
      padding: 'md',
    },
    controls: [
      { type: 'text', name: 'title', label: 'Title', placeholder: 'Card title' },
      { type: 'text', name: 'description', label: 'Description', placeholder: 'Descricao complementar' },
      { type: 'textarea', name: 'content', label: 'Content', placeholder: 'Conteudo de exemplo em um card.' },
      { type: 'select', name: 'variant', label: 'Variant', options: [{ label: 'Default', value: 'default' }, { label: 'Outlined', value: 'outlined' }] },
      { type: 'select', name: 'padding', label: 'Padding', options: [{ label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }, { label: 'LG', value: 'lg' }] },
    ],
    render: (props) => (
      <Labs.Card variant={props.variant} padding={props.padding}>
        <Labs.CardHeader title={props.title} description={props.description} />
        <Labs.CardBody><Labs.Text>{props.content}</Labs.Text></Labs.CardBody>
      </Labs.Card>
    ),
    code: (props) => wrapSnippet(['Card', 'CardBody', 'CardHeader', 'Text'], [
      'return (',
      `  <Card variant="${props.variant}" padding="${props.padding}">`,
      `    <CardHeader title="${props.title}" description="${props.description}" />`,
      `    <CardBody><Text>${props.content}</Text></CardBody>`,
      '  </Card>',
      ');',
    ]),
  },
});

export default cardDefinition;
