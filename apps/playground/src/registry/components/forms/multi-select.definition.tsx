import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';
import { MultiSelectPreview, wrapSnippet } from '../../../shared/playground/playground-helpers';

type MultiSelectPlaygroundProps = { label: string; placeholder: string; disabled: boolean };

const initialProps: MultiSelectPlaygroundProps = {
  label: 'Tecnologias',
  placeholder: 'Escolha tecnologias',
  disabled: false,
};

const multiselectDefinition: ComponentDefinition<MultiSelectPlaygroundProps> = defineComponent({
  id: 'multi-select',
  name: 'MultiSelect',
  category: 'forms',
  icon: 'list-checks',
  description: 'Selecao multipla com lista controlada.',
  playground: {
    initialProps,
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Tecnologias' },
      { type: 'text', name: 'placeholder', label: 'Placeholder', placeholder: 'Escolha tecnologias' },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
    ],
    render: (props) => <MultiSelectPreview {...props} />,
    code: (props) => wrapSnippet(['MultiSelect'], [
      'return (',
      '  <MultiSelect',
      `    label="${props.label}"`,
      '    options={[',
      "      { label: 'React', value: 'react' },",
      "      { label: 'Vue', value: 'vue' },",
      "      { label: 'Svelte', value: 'svelte' },",
      '    ]}',
      `    placeholder="${props.placeholder}"`,
      `${props.disabled ? '    disabled' : ''}`,
      '  />',
      ');',
    ].filter(Boolean)),
  },
});

export default multiselectDefinition;
