import * as Labs from '@aciole/acyon';
import { wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type DividerPlaygroundProps = {
  orientation: 'horizontal' | 'vertical';
  label: string;
};

const dividerDefinition: ComponentDefinition<DividerPlaygroundProps> = defineComponent<DividerPlaygroundProps>({
  id: 'divider',
  name: 'Divider',
  category: 'layout',
  icon: 'minus',
  description: 'Separador visual entre blocos relacionados.',
  playground: {
    initialProps: {
      orientation: 'horizontal',
      label: '',
    },
    controls: [
      { type: 'select', name: 'orientation', label: 'Orientation', options: [{ label: 'Horizontal', value: 'horizontal' }, { label: 'Vertical', value: 'vertical' }] },
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Ou' },
    ],
    render: (props) => props.orientation === 'horizontal'
      ? (
        <Labs.Flex direction="column" gap="3">
          <Labs.Text>Secao A</Labs.Text>
          <Labs.Divider orientation="horizontal" label={props.label || undefined} />
          <Labs.Text>Secao B</Labs.Text>
        </Labs.Flex>
      )
      : (
        <Labs.Flex align="center" gap="3">
          <Labs.Text>A</Labs.Text>
          <Labs.Divider orientation="vertical" />
          <Labs.Text>B</Labs.Text>
        </Labs.Flex>
      ),
    code: (props) => wrapSnippet(['Divider'], [
      'return (',
      `  <Divider orientation="${props.orientation}"${props.label ? ` label="${props.label}"` : ''} />`,
      ');',
    ]),
  },
});

export default dividerDefinition;
