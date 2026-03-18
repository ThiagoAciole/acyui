import * as Labs from 'acioleui';
import { wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type FlexPlaygroundProps = {
  direction: 'row' | 'column';
  align: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  justify: 'flex-start' | 'center' | 'flex-end' | 'space-between';
  gap: '0' | '2' | '4' | '6';
};

const flexDefinition: ComponentDefinition<FlexPlaygroundProps> = defineComponent<FlexPlaygroundProps>({
  id: 'flex',
  name: 'Flex',
  category: 'layout',
  icon: 'align-horizontal',
  description: 'Layout flexivel para alinhamento e distribuicao.',
  playground: {
    initialProps: {
      direction: 'row',
      align: 'center',
      justify: 'center',
      gap: '4',
    },
    controls: [
      {
        type: 'select',
        name: 'direction',
        label: 'Direction',
        options: [
          { label: 'Row', value: 'row' },
          { label: 'Column', value: 'column' },
        ],
      },
      {
        type: 'select',
        name: 'align',
        label: 'Align',
        options: [
          { label: 'Flex-Start', value: 'flex-start' },
          { label: 'Center', value: 'center' },
          { label: 'Flex-End', value: 'flex-end' },
          { label: 'Stretch', value: 'stretch' },
        ],
      },
      {
        type: 'select',
        name: 'justify',
        label: 'Justify',
        options: [
          { label: 'Flex-Start', value: 'flex-start' },
          { label: 'Center', value: 'center' },
          { label: 'Flex-End', value: 'flex-end' },
          { label: 'Space-Between', value: 'space-between' },
        ],
      },
      {
        type: 'select',
        name: 'gap',
        label: 'Gap',
        options: [
          { label: '0', value: '0' },
          { label: '2', value: '2' },
          { label: '4', value: '4' },
          { label: '6', value: '6' },
        ],
      },
    ],
    render: (props) => (
      <div style={{ width: '100%' }}>
        <Labs.Flex
          direction={props.direction}
          align={props.align}
          justify={props.justify}
          gap={props.gap}
          style={{ width: '100%' }}
        >
          <Labs.Card style={{ padding: 16, minWidth: 120 }}>Card 1</Labs.Card>
          <Labs.Card style={{ padding: 16, minWidth: 120 }}>Card 2</Labs.Card>
          <Labs.Card style={{ padding: 16, minWidth: 120 }}>Card 3</Labs.Card>
        </Labs.Flex>
      </div>
    ),
    code: (props) =>
      wrapSnippet(['Card', 'Flex'], [
        'return (',
        '  <div style={{ width: "100%" }}>',
        `    <Flex direction="${props.direction}" align="${props.align}" justify="${props.justify}" gap="${props.gap}" style={{ width: "100%" }}>`,
        '      <Card style={{ padding: 16, minWidth: 120 }}>Card 1</Card>',
        '      <Card style={{ padding: 16, minWidth: 120 }}>Card 2</Card>',
        '      <Card style={{ padding: 16, minWidth: 120 }}>Card 3</Card>',
        '    </Flex>',
        '  </div>',
        ');',
      ]),
  },
});

export default flexDefinition;