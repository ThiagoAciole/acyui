import * as Labs from '@aciole/acyon';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';
import { buildOpeningTag, SwitchPreview, wrapSnippet } from '../../../shared/playground/playground-helpers';

type SwitchPlaygroundProps = Pick<Labs.SwitchProps, 'label' | 'checked' | 'disabled' | 'size'>;

const initialProps: SwitchPlaygroundProps = {
  label: 'Ativar notificacoes',
  checked: true,
  disabled: false,
  size: 'medium',
};

const switchDefinition: ComponentDefinition<SwitchPlaygroundProps> = defineComponent({
  id: 'switch',
  name: 'Switch',
  category: 'forms',
  icon: 'toggle-right',
  description: 'Alternancia binaria para configuracoes.',
  playground: {
    initialProps,
    controls: [
      { type: 'text', name: 'label', label: 'Label', placeholder: 'Ativar notificacoes' },
      { type: 'select', name: 'size', label: 'Size', options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }] },
      { type: 'boolean', name: 'checked', label: 'Checked' },
      { type: 'boolean', name: 'disabled', label: 'Disabled' },
    ],
    render: (props) => <SwitchPreview {...props} />,
    code: (props) => wrapSnippet(['Switch'], [
      'return (',
      `  ${buildOpeningTag('Switch', props as Record<string, unknown>)} />`,
      ');',
    ]),
  },
});

export default switchDefinition;
