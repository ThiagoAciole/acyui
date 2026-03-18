import * as Labs from 'acioleui';
import { wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type SpacerPlaygroundProps = {
  axis: 'horizontal' | 'vertical';
  size: number;
};

const DemoCard = ({ children }: { children: React.ReactNode }) => (
  <Labs.Card style={{ padding: 16, minWidth: 120 }}>
    <Labs.Text>{children}</Labs.Text>
  </Labs.Card>
);

const spacerDefinition: ComponentDefinition<SpacerPlaygroundProps> = defineComponent<SpacerPlaygroundProps>({
  id: 'spacer',
  name: 'Spacer',
  category: 'layout',
  icon: 'ruler',
  description: 'Espacador declarativo entre elementos.',
  playground: {
    initialProps: {
      axis: 'horizontal',
      size: 24,
    },
    controls: [
      {
        type: 'select',
        name: 'axis',
        label: 'Axis',
        options: [
          { label: 'Horizontal', value: 'horizontal' },
          { label: 'Vertical', value: 'vertical' },
        ],
      },
      { type: 'number', name: 'size', label: 'Size', placeholder: '24' },
    ],
    render: (props) =>
      props.axis === 'horizontal' ? (
        <Labs.Flex align="center">
          <DemoCard>InÃ­cio</DemoCard>
          <Labs.Spacer axis="horizontal" size={props.size} />
          <DemoCard>Fim</DemoCard>
        </Labs.Flex>
      ) : (
        <Labs.Flex direction="column">
          <DemoCard>InÃ­cio</DemoCard>
          <Labs.Spacer axis="vertical" size={props.size} />
          <DemoCard>Fim</DemoCard>
        </Labs.Flex>
      ),
    code: (props) =>
      wrapSnippet(['Spacer', 'Card', 'Text', 'Flex'], [
        'return (',
        props.axis === 'horizontal'
          ? `
    <Spacer axis="${props.axis}" size={${props.size}} />`
          : `
    <Spacer axis="${props.axis}" size={${props.size}} />`,
        ');',
      ]),
  },
});

export default spacerDefinition;