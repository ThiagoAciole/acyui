import * as Labs from 'acioleui';
import { wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type ContainerPlaygroundProps = {
  size: 'small' | 'medium' | 'large' | 'extraLarge' | 'full';
  children: string;
};

const containerDefinition: ComponentDefinition<ContainerPlaygroundProps> = defineComponent<ContainerPlaygroundProps>({
  id: 'container',
  name: 'Container',
  category: 'layout',
  icon: 'box',
  description: 'Limita largura e centraliza conteudo.',
  playground: {
    initialProps: {
      size: 'medium',
      children: 'Area de container.',
    },
    controls: [
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }, { label: 'ExtraLarge', value: 'extraLarge' }, { label: 'Full', value: 'full' }] },
      { type: 'textarea', name: 'children', label: 'Content', placeholder: 'Area de container.' },
    ],
    render: (props) => <Labs.Container size={props.size}><Labs.Text>{props.children}</Labs.Text></Labs.Container>,
    code: (props) => wrapSnippet(['Container', 'Text'], [
      'return (',
      `  <Container size="${props.size}"><Text>${props.children}</Text></Container>`,
      ');',
    ]),
  },
});

export default containerDefinition;
