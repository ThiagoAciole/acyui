import * as Labs from 'acioleui';
import { wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type GridPlaygroundProps = {
  columns: '1' | '2' | '3' | '4';
  gap: '2' | '4' | '6';
};

const gridDefinition: ComponentDefinition<GridPlaygroundProps> = defineComponent<GridPlaygroundProps>({
  id: 'grid',
  name: 'Grid',
  category: 'layout',
  icon: 'grid',
  description: 'Composicao em colunas responsivas.',
  playground: {
    initialProps: {
      columns: '3',
      gap: '4',
    },
    controls: [
      { type: 'select', name: 'columns', label: 'Columns', options: [{ label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' }] },
      { type: 'select', name: 'gap', label: 'Gap', options: [{ label: '2', value: '2' }, { label: '4', value: '4' }, { label: '6', value: '6' }] },
    ],
    render: (props) => (
      <Labs.Grid columns={Number(props.columns) as 1 | 2 | 3 | 4} gap={props.gap}>
        <Labs.Card><Labs.CardBody>A</Labs.CardBody></Labs.Card>
        <Labs.Card><Labs.CardBody>B</Labs.CardBody></Labs.Card>
        <Labs.Card><Labs.CardBody>C</Labs.CardBody></Labs.Card>
      </Labs.Grid>
    ),
    code: (props) => wrapSnippet(['Card', 'CardBody', 'Grid'], [
      'return (',
      `  <Grid columns={${Number(props.columns)}} gap="${props.gap}">`,
      '    <Card><CardBody>A</CardBody></Card>',
      '    <Card><CardBody>B</CardBody></Card>',
      '    <Card><CardBody>C</CardBody></Card>',
      '  </Grid>',
      ');',
    ]),
  },
});

export default gridDefinition;
