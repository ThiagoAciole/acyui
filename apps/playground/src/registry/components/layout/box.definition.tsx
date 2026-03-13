import * as Labs from '@aciole/acyon';
import { buildOpeningTag, wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type BoxPlaygroundProps = {
  padding: '0' | '2' | '4' | '6';
  rounded: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  shadow: 'none' | 'sm' | 'md' | 'lg';
  surface: 'default' | 'subtle' | 'inverse';
  border: boolean;
  children: string;
};

const boxDefinition: ComponentDefinition<BoxPlaygroundProps> = defineComponent<BoxPlaygroundProps>({
  id: 'box',
  name: 'Box',
  category: 'layout',
  icon: 'box',
  description: 'Bloco base de composicao para layout e espacamento.',
  playground: {
    initialProps: {
      padding: '4',
      rounded: 'lg',
      shadow: 'sm',
      surface: 'subtle',
      border: false,
      children: 'Conteudo dentro do Box.',
    },
    controls: [
      { type: 'select', name: 'padding', label: 'Padding', options: [{ label: '0', value: '0' }, { label: '2', value: '2' }, { label: '4', value: '4' }, { label: '6', value: '6' }] },
      { type: 'select', name: 'rounded', label: 'Rounded', options: [{ label: 'None', value: 'none' }, { label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }, { label: 'LG', value: 'lg' }, { label: 'XL', value: 'xl' }] },
      { type: 'select', name: 'shadow', label: 'Shadow', options: [{ label: 'None', value: 'none' }, { label: 'SM', value: 'sm' }, { label: 'MD', value: 'md' }, { label: 'LG', value: 'lg' }] },
      { type: 'select', name: 'surface', label: 'Surface', options: [{ label: 'Default', value: 'default' }, { label: 'Subtle', value: 'subtle' }, { label: 'Inverse', value: 'inverse' }] },
      { type: 'boolean', name: 'border', label: 'Border' },
      { type: 'textarea', name: 'children', label: 'Content', placeholder: 'Conteudo dentro do Box.' },
    ],
    render: (props) => (
      <Labs.Box padding={props.padding} rounded={props.rounded} shadow={props.shadow} surface={props.surface} border={props.border}>
        <Labs.Text>{props.children}</Labs.Text>
      </Labs.Box>
    ),
    code: (props) => wrapSnippet(['Box', 'Text'], [
      'return (',
      `  ${buildOpeningTag('Box', { padding: props.padding, rounded: props.rounded, shadow: props.shadow, surface: props.surface, border: props.border })}>`,
      `    <Text>${props.children}</Text>`,
      '  </Box>',
      ');',
    ]),
  },
});

export default boxDefinition;
