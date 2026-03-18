import * as Labs from 'acioleui';
import { buildOpeningTag, CheckboxPreview, wrapSnippet } from '../../../shared/playground/playground-helpers';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

type CheckboxPlaygroundProps = Pick<Labs.CheckboxProps, 'label' | 'checked' | 'disabled'>;

const initialProps: CheckboxPlaygroundProps = {
  label: 'Aceitar termos',
  checked: true,
  disabled: false,
};

const checkboxDefinition: ComponentDefinition<CheckboxPlaygroundProps> = defineComponent({
  id: 'checkbox',
  name: 'Checkbox',
  category: 'forms',
  icon: 'check-square',
  description: 'Selecao booleana independente.',
  playground: {
    initialProps,
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Aceitar termos' },
      { type: 'boolean', name: 'checked', label: 'Checked' },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
    ],
    render: (props) => <CheckboxPreview {...props} />,
    code: (props) => wrapSnippet(['Checkbox'], [
      'return (',
      `  ${buildOpeningTag('Checkbox', props as Record<string, unknown>)} />`,
      ');',
    ]),
  },
});

export default checkboxDefinition;
