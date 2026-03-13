import * as Labs from '@aciole/acyon';
import { wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type DropdownPlaygroundProps = {
  label: string;
  placement: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
  matchTriggerWidth: boolean;
  disabled: boolean;
};

const dropdownDefinition: ComponentDefinition<DropdownPlaygroundProps> = defineComponent<DropdownPlaygroundProps>({
  id: 'dropdown',
  name: 'Dropdown',
  category: 'overlay',
  icon: 'more-horizontal',
  description: 'Menu contextual acionado por um trigger customizavel.',
  playground: {
    initialProps: {
      label: 'Acoes',
      placement: 'bottom-start',
      matchTriggerWidth: false,
      disabled: false,
    },
    controls: [
      { type: 'text', name: 'label', label: 'Trigger label', placeholder: 'Acoes' },
      { type: 'select', name: 'placement', label: 'Placement', options: [{ label: 'Bottom Start', value: 'bottom-start' }, { label: 'Bottom End', value: 'bottom-end' }, { label: 'Top Start', value: 'top-start' }, { label: 'Top End', value: 'top-end' }] },
      { type: 'boolean', name: 'matchTriggerWidth', label: 'Match trigger width' },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
    ],
    render: (props) => (
      <Labs.Dropdown
        placement={props.placement}
        matchTriggerWidth={Boolean(props.matchTriggerWidth)}
        disabled={Boolean(props.disabled)}
        content={(
          <>
            <Labs.Dropdown.Item leftContent={<Labs.Icon name="edit" size={14} />}>Editar</Labs.Dropdown.Item>
            <Labs.Dropdown.Item leftContent={<Labs.Icon name="copy" size={14} />}>Duplicar</Labs.Dropdown.Item>
            <Labs.Dropdown.Item destructive leftContent={<Labs.Icon name="trash" size={14} />}>Excluir</Labs.Dropdown.Item>
          </>
        )}
      >
        <Labs.Button variant="outline" disabled={Boolean(props.disabled)}>{props.label}</Labs.Button>
      </Labs.Dropdown>
    ),
    code: (props) => wrapSnippet(['Button', 'Dropdown', 'Icon'], [
      'return (',
      '  <Dropdown',
      `    placement="${props.placement}"`,
      `${props.matchTriggerWidth ? '    matchTriggerWidth' : ''}`,
      `${props.disabled ? '    disabled' : ''}`,
      '    content={(',
      '      <>',
      '        <Dropdown.Item leftContent={<Icon name="edit" size={14} />}>Editar</Dropdown.Item>',
      '        <Dropdown.Item leftContent={<Icon name="copy" size={14} />}>Duplicar</Dropdown.Item>',
      '        <Dropdown.Item destructive leftContent={<Icon name="trash" size={14} />}>Excluir</Dropdown.Item>',
      '      </>',
      '    )}',
      '  >',
      `    <Button variant="outline"${props.disabled ? ' disabled' : ''}>${props.label}</Button>`,
      '  </Dropdown>',
      ');',
    ].filter(Boolean)),
  },
});

export default dropdownDefinition;
