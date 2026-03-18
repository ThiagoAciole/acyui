import * as Labs from 'acioleui';
import { buildOpeningTag, wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type CodePlaygroundProps = {
  children: string;
  size: 'small' | 'medium' | 'large';
  weight: 'normal' | 'medium' | 'semibold' | 'bold';
  block: boolean;
};

const codeDefinition: ComponentDefinition<CodePlaygroundProps> = defineComponent<CodePlaygroundProps>({
  id: 'code',
  name: 'Code',
  category: 'typography',
  icon: 'code',
  description: 'Estilo inline para snippets e tokens tecnicos.',
  playground: {
    initialProps: {
      children: 'npm install acioleui',
      size: 'small',
      weight: 'medium',
      block: false,
    },
    controls: [
      { type: 'textarea', name: 'children', label: 'Content', placeholder: 'npm install acioleui' },
      {
        type: 'select',
        name: 'size',
        label: 'Size',
        options: [
          { label: 'Small', value: 'small' },
          { label: 'Medium', value: 'medium' },
          { label: 'Large', value: 'large' },
        ],
      },
      {
        type: 'select',
        name: 'weight',
        label: 'Weight',
        options: [
          { label: 'Normal', value: 'normal' },
          { label: 'Medium', value: 'medium' },
          { label: 'Semibold', value: 'semibold' },
          { label: 'Bold', value: 'bold' },
        ],
      },
      { type: 'boolean', name: 'block', label: 'Block' },
    ],
    render: (props) => (
      <Labs.Code size={props.size} weight={props.weight} block={Boolean(props.block)}>
        {props.children}
      </Labs.Code>
    ),
    code: (props) => wrapSnippet(['Code'], [
      'return (',
      `  ${buildOpeningTag('Code', { size: props.size, weight: props.weight, block: props.block })}>${props.children}</Code>`,
      ');',
    ]),
  },
});

export default codeDefinition;
