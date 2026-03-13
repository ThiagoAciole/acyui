import { MultiSelectPreview, wrapSnippet } from '../playgroundShared';
import type { ComponentDefinition } from '../types';


type MultiSelectPlaygroundProps = { label: string; placeholder: string; disabled: boolean };

export const multiselectDefinition = {
  id: 'multi-select',
  name: 'MultiSelect',
  category: 'forms',
  icon: 'list-checks',
  description: 'Selecao multipla com lista controlada.',
  imports: ['MultiSelect'],
  initialProps: { label: 'Tecnologias', placeholder: 'Escolha tecnologias', disabled: false },
  controls: [
    { type: 'text', name: 'label', label: 'Label', placeholder: 'Tecnologias' },
    { type: 'text', name: 'placeholder', label: 'Placeholder', placeholder: 'Escolha tecnologias' },
    { type: 'boolean', name: 'disabled', label: 'Disabled' },
  ],
  render: (props: MultiSelectPlaygroundProps) => <MultiSelectPreview {...props} />,
  generateCode: (props) => wrapSnippet(['MultiSelect'], [
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

} satisfies ComponentDefinition<MultiSelectPlaygroundProps>;
