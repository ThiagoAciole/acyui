import * as Labs from 'acioleui';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';
import { SelectPreview, wrapSnippet } from '../../../shared/playground/playground-helpers';

type SelectPlaygroundProps = Pick<Labs.SelectProps, 'label' | 'value' | 'placeholder' | 'disabled'>;

const initialProps: SelectPlaygroundProps = {
  label: 'Area',
  placeholder: 'Escolha uma area',
  value: 'design',
  disabled: false,
};

const selectDefinition: ComponentDefinition<SelectPlaygroundProps> = defineComponent({
  id: 'select',
  name: 'Select',
  category: 'forms',
  icon: 'list-filter',
  description: 'Selecao simples em lista.',
  playground: {
    initialProps,
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Area' },
      { type: 'select', name: 'value', label: 'Value', options: [{ label: 'Design', value: 'design' }, { label: 'Engineering', value: 'engineering' }, { label: 'Product', value: 'product' }] },
      { type: 'text', name: 'placeholder', label: 'Placeholder', placeholder: 'Escolha uma area' },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
    ],
    render: (props) => <SelectPreview {...props} />,
    code: (props) => wrapSnippet(['Select'], [
      'return (',
      '  <Select',
      `    label="${props.label}"`,
      '    options={[',
      "      { label: 'Design', value: 'design' },",
      "      { label: 'Engineering', value: 'engineering' },",
      "      { label: 'Product', value: 'product' },",
      '    ]}',
      `    value="${props.value}"`,
      `    placeholder="${props.placeholder}"`,
      `${props.disabled ? '    disabled' : ''}`,
      '  />',
      ');',
    ].filter(Boolean)),
  },
});

export default selectDefinition;
