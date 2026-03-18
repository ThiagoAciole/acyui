import * as Labs from 'acioleui';
import { wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type TablePlaygroundProps = {
  striped: boolean;
  hover: boolean;
  compact: boolean;
  stickyHeader: boolean;
};

const tableDefinition: ComponentDefinition<TablePlaygroundProps> = defineComponent<TablePlaygroundProps>({
  id: 'table',
  name: 'Table',
  category: 'data-display',
  icon: 'table',
  description: 'Apresentacao tabular de dados.',
  playground: {
    initialProps: {
      striped: true,
      hover: true,
      compact: false,
      stickyHeader: false,
    },
    controls: [
      { type: 'boolean', name: 'striped', label: 'Striped' },
      { type: 'boolean', name: 'hover', label: 'Hover rows' },
      { type: 'boolean', name: 'compact', label: 'Compact' },
      { type: 'boolean', name: 'stickyHeader', label: 'Sticky header' },
    ],
    render: (props) => (
      <Labs.Table striped={props.striped} hover={props.hover} compact={props.compact} stickyHeader={props.stickyHeader}>
        <Labs.Thead><Labs.Tr><Labs.Th>Nome</Labs.Th><Labs.Th>Papel</Labs.Th></Labs.Tr></Labs.Thead>
        <Labs.Tbody>
          <Labs.Tr><Labs.Td>Thiago</Labs.Td><Labs.Td>Owner</Labs.Td></Labs.Tr>
          <Labs.Tr><Labs.Td>AcioleUI</Labs.Td><Labs.Td>System</Labs.Td></Labs.Tr>
        </Labs.Tbody>
      </Labs.Table>
    ),
    code: (props) => wrapSnippet(['Table', 'Thead', 'Tbody', 'Tr', 'Th', 'Td'], [
      'return (',
      `  <Table${props.striped ? ' striped' : ''}${props.hover ? ' hover' : ''}${props.compact ? ' compact' : ''}${props.stickyHeader ? ' stickyHeader' : ''}>`,
      '    <Thead><Tr><Th>Nome</Th><Th>Papel</Th></Tr></Thead>',
      '    <Tbody>',
      '      <Tr><Td>Thiago</Td><Td>Owner</Td></Tr>',
      '      <Tr><Td>AcioleUI</Td><Td>System</Td></Tr>',
      '    </Tbody>',
      '  </Table>',
      ');',
    ]),
  },
});

export default tableDefinition;
