import * as Labs from '@aciole/acyon';
import { wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type SpacerPlaygroundProps = {
  axis: 'horizontal' | 'vertical';
  size: string;
};

const spacerDefinition: ComponentDefinition<SpacerPlaygroundProps> = defineComponent<SpacerPlaygroundProps>({
  id: 'spacer',
  name: 'Spacer',
  category: 'layout',
  icon: 'ruler',
  description: 'Espacador declarativo entre elementos.',
  playground: {
    initialProps: {
      axis: 'horizontal',
      size: '24px',
    },
    controls: [
      { type: 'select', name: 'axis', label: 'Axis', options: [{ label: 'Horizontal', value: 'horizontal' }, { label: 'Vertical', value: 'vertical' }] },
      { type: 'text', name: 'size', label: 'Size', placeholder: '24px' },
    ],
    render: (props) => props.axis === 'horizontal'
      ? (
        <Labs.Flex align="center">
          <Labs.Badge>Inicio</Labs.Badge>
          <Labs.Spacer axis="horizontal" size={props.size} />
          <Labs.Badge>Fim</Labs.Badge>
        </Labs.Flex>
      )
      : (
        <Labs.Flex direction="column">
          <Labs.Badge>Inicio</Labs.Badge>
          <Labs.Spacer axis="vertical" size={props.size} />
          <Labs.Badge>Fim</Labs.Badge>
        </Labs.Flex>
      ),
    code: (props) => wrapSnippet(['Spacer'], [
      'return (',
      `  <Spacer axis="${props.axis}" size="${props.size}" />`,
      ');',
    ]),
  },
});

export default spacerDefinition;
